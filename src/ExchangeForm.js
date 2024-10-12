import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";

export default function ExchangeForm() {
    const [names, setNames] = useState("");
    const [nameArray, setNameArray] = useState([]);
    const [exclusions, setExclusions] = useState(""); // Exclusions as text
    const [assignmentList, setAssignmentList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(""); // To store error messages

    // Refs to scroll to the results or the error message
    const resultsRef = useRef(null);
    const errorRef = useRef(null);

    const handleClick = (event) => {
        event.preventDefault();
        const regexNamesByLine = /\r?\n/;
        let nameArrayBuilder = names.split(regexNamesByLine);
        nameArrayBuilder = removeEmptyStrings(nameArrayBuilder);
        setNameArray(nameArrayBuilder);

        let exclusionArray = exclusions.split(regexNamesByLine);
        exclusionArray = parseExclusions(exclusionArray);

        const result = generateAssignmentsWithBacktracking(nameArrayBuilder, exclusionArray);

        if (result.success) {
            setAssignmentList(result.assignments);
            setErrorMessage("");
            // Scroll to the results section
            scrollToResults();
        } else {
            setErrorMessage(result.error);
            setAssignmentList([]);
            // Scroll to the error section
            scrollToError();
        }
    };

    // Removes empty strings from the array
    function removeEmptyStrings(arr) {
        return arr.filter(element => element !== '');
    }

    // Parse exclusions into pairs (e.g. "Person A - Person B")
    function parseExclusions(arr) {
        let exclusionPairs = [];
        arr.forEach(line => {
            let pair = line.split("-");
            if (pair.length === 2) {
                exclusionPairs.push(pair.map(name => name.trim()));
            }
        });
        return exclusionPairs;
    }

    // Generate assignments with backtracking to ensure every participant gets a valid recipient
    function generateAssignmentsWithBacktracking(entries, exclusions) {
        let assignments = [];
        let remainingNames = [...entries];

        // Shuffle the list to ensure randomness
        shuffleArray(remainingNames);

        function canAssign(person, recipient, currentAssignments) {
            // Check if the recipient is the same person (self-assignment)
            if (person === recipient) return false;

            // Check if the recipient is excluded for this person
            if (exclusions.some(exclusion =>
                (exclusion[0] === person && exclusion[1] === recipient) ||
                (exclusion[1] === person && exclusion[0] === recipient))) {
                return false;
            }

            // Check if the recipient is already assigned
            if (currentAssignments.some(assignment => assignment.recipient === recipient)) {
                return false;
            }

            return true;
        }

        function backtrack(currentAssignments) {
            if (currentAssignments.length === entries.length) {
                return true; // All assignments made
            }

            let person = entries[currentAssignments.length];

            // Try to assign each remaining recipient to this person
            for (let i = 0; i < remainingNames.length; i++) {
                let recipient = remainingNames[i];

                if (canAssign(person, recipient, currentAssignments)) {
                    currentAssignments.push({ giver: person, recipient: recipient, id: uuid() });

                    // Remove recipient from available list
                    const tempRemainingNames = remainingNames.filter(name => name !== recipient);

                    // Recurse to assign the next person
                    if (backtrack(currentAssignments)) {
                        return true;
                    }

                    // If this path fails, backtrack (remove last assignment)
                    currentAssignments.pop();
                    remainingNames = tempRemainingNames;
                }
            }

            return false; // No valid assignments found for this path
        }

        let success = backtrack(assignments);

        if (success) {
            return { success: true, assignments: assignments };
        } else {
            return { success: false, error: "Unable to find a valid assignment. Please check exclusions and try again." };
        }
    }

    // Fisher-Yates shuffle algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Scroll to the results section
    function scrollToResults() {
        if (resultsRef.current) {
            resultsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Scroll to the error message
    function scrollToError() {
        if (errorRef.current) {
            errorRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <>
        <div className="section main-section">
            <div className="section">
                <form>
                    <div className="form-group">
                      <label className="label-instructions" for="exchangeTextarea">Enter each participant (name, etc.) on its own line in the field below.</label>
                      <textarea className="form-control form-control-lg" id="exchangeTextarea" rows="7" placeholder="Name 1" value={names} onChange={e => setNames(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <label className="label-instructions" for="exclusionTextarea">Enter exclusions (e.g. "Person A - Person B") one per line:</label>
                        <textarea className="form-control form-control-lg" id="exclusionTextarea" rows="7" placeholder="Person A - Person B" value={exclusions} onChange={e => setExclusions(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary" onClick={handleClick}>Draw</button>
                    </div>
                </form>
            </div>
            <div className="section">
              <p className="p-description">This hat is great for gift exchanges pairing up a giver and a recipient
                for each participant. You can set exclusions for a pair to not be able to draw each other (such as couples),
                while keeping the rest random.</p>
            </div>
        </div>

        {/* Display error message if there's an error */}
        {errorMessage && (
          <div className="error-message" ref={errorRef}>
              <h2>{errorMessage}</h2>
          </div>
        )}

        {/* Results section with reference for scrolling */}
        <ul className="list" ref={resultsRef}>
            {assignmentList.map((assignment) => {
              return <li key={assignment.id}><h1>{assignment.giver} → {assignment.recipient}</h1></li>;
            })}
        </ul>
        </>
    );
}