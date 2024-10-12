import { useState, useRef, useEffect } from "react";
import {v4 as uuid} from "uuid";
//import axios from 'axios';

export default function RaffleForm() {
    const [names, setNames] = useState("");
    const [nameArray, setNameArray] = useState([]);
    const [numPrizes, setNumPrizes] = useState("1");
    const [winnerList, setWinnerList] = useState([]);

    // Use a ref to scroll to the results section
    const resultsRef = useRef(null);
    
    const handleClick = (event) => {
        event.preventDefault();
        console.log("Name Array before Draw: " + nameArray);
        const regexNamesByLine = /\r?\n/;
        //TIL you can't set a state in a function more than once or it just 
        //does not work. So I am making a temporary array to build with...
        let nameArrayBuilder = names.split(regexNamesByLine);
        //this puts the string on each line into a name in the array
        console.log("Name Array after Draw: " + nameArrayBuilder);
        //may want to filter out empty strings if they entered multiple times
        nameArrayBuilder = removeEmptyStrings(nameArrayBuilder);
        //might not use this for now and just pass builder since setting is weird
        setNameArray(nameArrayBuilder);
        let prizesCount = numPrizes;
        raffleAllWinners(nameArrayBuilder, prizesCount);
        // Scroll to the results after the winners are drawn
        scrollToResults();
    }
    
    function removeEmptyStrings(arr) {
        const results = arr.filter(element => {
          return element !== '';
        });
        return results;
    }
    
    //this will be used if they just provide the number of prizes and want a list of all the winners
    function raffleAllWinners(entries, prizesLeft) {
        //copy entries in case there are more prizes than entries can reshuffle entries rather than crash
        const originalEntries = [...entries];
        console.log("Initial entries: " + originalEntries + "Current entries: " + entries);
        let listBuilder = [];
        let prizeCount = "1";
        while (prizesLeft > 0) {
            if (entries.length === 0) {
                //put all names back into raffle
                entries = [...originalEntries];
            }
            let winner = {name: drawWinner(entries), id: uuid()};
            console.log("Winner: " + winner);
            console.log("Current entries: " + entries);
            //output += ("Prize " + prizeCount + " Winner:\n\n" + winner + "\n\n");
            listBuilder.push(winner);
            prizesLeft--;
            prizeCount++;
        }
        console.log("Initial entries: " + originalEntries + "Current entries: " + entries);
        setWinnerList(listBuilder);
        //setOutputWinner(output);
    }
    
    //this will draw one random winner and remove them from the names in the raffle
    function drawWinner(entries) {
        //generates random index between 0 and length - 1
        let winIndex = Math.floor(entries.length * Math.random());
        console.log(winIndex);
        //set winner and then remove from array. duplicate names are okay for raffle--just remove one
        let winner = entries[winIndex];
        entries.splice(winIndex, 1);
        return winner;
    }
    
//     useEffect(() => {
//     console.log("array: " + nameArray);
// }, [nameArray]);
    
    // Scroll to the results section
    function scrollToResults() {
        if (resultsRef.current) {
            resultsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <>
        <div className="section main-section">
            <div className="section">
                <form>
                    <div className="form-group">
                      <label className="label-instructions" for="raffleHatTextarea">Enter
                        each entry (name, number, etc.) on its own line in the field below:
                      </label>
                      <textarea className="form-control form-control-lg" id="exchangeHatTextarea" rows="7" placeholder="Name 1" value={names} onChange={e => setNames(e.target.value)}></textarea>
                      {/*Could have done something like "Name 1&#10;Name 2&#10;etc..." to show lines, but it doesn't work on safari or iphones. Would need
                        to use jQuery for that*/}
                    </div>
                    <div className="form-group">
                        <label className="label-instructions" for="exchangeHatTextarea">Enter the
                          number of prizes being raffled (if there are more prizes than entries,
                          the hat will be refilled when empty):</label>
                        <input type="number" className="form-control form-control-lg" id="exchangeHatTextarea" rows="1" min="1" value={numPrizes} onChange={e => setNumPrizes(e.target.value)}/>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary" onClick={handleClick}>Draw</button>
                    </div>
                    
                </form>
            </div>
            <div className="section">
              <p className="p-description">This hat is great for raffles. You provide the list of entries and
                select how many names are pulled based on how many prizes are available. It will simulate the
                full raffle, removing the entry after each draw.</p>
            </div>
        </div>
        {/* Winners list with reference for scrolling */}
        <ul className="list" ref={resultsRef}>
            {winnerList.map((winner, index) => {
              return <li key={winner.id}><h1>Prize {index + 1} Winner: {winner.name}</h1></li>;
            })}
        </ul>
        </>
    );
}


//Below is another implementation I was testing out for the raffle. I may use it later for more features.

//"Prize " + prizeCount + " Winner:\n\n" + winner + "\n\n"
// {cart.map(product => (
//       <div key={product.id} className="product">
//         <CartProduct product={product} setError={setError} updateCart={updateCart}/>
//       </div>
//     ))}    

//$(document).ready(function () {
    //this will be used if they just provide the number of prizes and want a list of all the winners
    // function raffleAllWinners(names, numPrizes) {
    //     //copy names in case there are more prizes than names can reshuffle names rather than crash
    //     const originalNames = [...names];
    //     console.log("Initial names: " + names, originalNames);
    //     while (numPrizes > 0) {
    //         if (names.length === 0) {
    //             //put all names back into raffle
    //             names = [...originalNames];
    //         }
    //         let winner = drawWinner(names);
    //         console.log("Winner: " + winner);
    //         console.log("Current names: " + names);
    //         numPrizes--;
    //     }
    //     console.log("Initial names: " + names, originalNames);
    // }

    // //this will draw one random winner and remove them from the names in the raffle
    // function drawWinner(names) {
    //     //generates random index between 0 and length - 1
    //     let winIndex = Math.floor(names.length * Math.random());
    //     console.log(winIndex);
    //     //set winner and then remove from array. duplicate names are okay for raffle--just remove one
    //     let winner = names[winIndex];
    //     names.splice(winIndex, 1);
    //     return winner;
    // }

    // function raffleWinnersWithPrizes(names, prizes) {
    //     console.log("Initial names: " + names);
    //     console.log("Initial prizes: " + prizes);
    //     while (prizes.length > 0) {
    //         let winner = drawWinnerWithPrize(names, prizes);
    //         console.log(winner);
    //         console.log("Current names: " + names);
    //         console.log("Current prizes: " + prizes);
    //     }
    // }

    // function drawWinnerWithPrize(names, prizes) {
    //     //generates random index between 0 and length - 1
    //     let winIndex = Math.floor(names.length * Math.random());
    //     console.log(winIndex);
    //     //set winner and then remove from array. duplicate names are okay for raffle--just remove one
    //     let winner = names[winIndex];

    //     names.splice(winIndex, 1);
    //     return winner;
    // }

    // //may want to account for if there are more prizes than names and reshuffle names


    // raffleAllWinners(["Sonia", "Ty", "Baby", "Natalie", "Empress"], 7);

//});