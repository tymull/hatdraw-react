#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <time.h>
#include <queue>

using namespace std;

bool isNotSpouse(string giver, string receiver)
{
	if ((giver == "Bob" && receiver == "Kim") || (giver == "Kim" && receiver == "Bob") ||
		(giver == "JP" && receiver == "Summer") || (giver == "Summer" && receiver == "JP") ||
		(giver == "Bryson" && receiver == "Cherie") || (giver == "Cherie" && receiver == "Bryson") ||
		(giver == "Ty" && receiver == "Sonia") || (giver == "Sonia" && receiver == "Ty"))
	{
		return false;
	}
	else
	{
		return true;
	}
}

void printResults(map<string, string> results)
{
	for (map<string, string>::iterator it = results.begin(); it != results.end(); it++)
	{
		cout << "\n\t" << it->first << " will get a gift for " << it->second << "." << endl;
	}
}

int main()
{
	srand(time(0));

	vector <string> hatNames;
	hatNames.push_back("Primogeniture");
	hatNames.push_back("Bob");
	hatNames.push_back("Kim");
	hatNames.push_back("Brandon");
	hatNames.push_back("Summer");
	hatNames.push_back("JP");
	//hatNames.push_back("Bryson");
	//hatNames.push_back("Cherie");
	hatNames.push_back("Tiffany");
	hatNames.push_back("Sonia");
	hatNames.push_back("Ty");

	queue <string> giverNames;
	giverNames.push("Primogeniture");
	giverNames.push("Bob");
	giverNames.push("Kim");
	giverNames.push("Brandon");
	giverNames.push("Summer");
	giverNames.push("JP");
	//giverNames.push("Bryson");
	//giverNames.push("Cherie");
	giverNames.push("Tiffany");
	giverNames.push("Sonia");
	giverNames.push("Ty");

	map<string, string> giverReciever;
	int iterationNumber = hatNames.size(); //want it to cover all of the names even though size will decrement in loop
	int loopIt = 0;
	while (loopIt < iterationNumber)
	{
		if (hatNames.size() != 0)
		{
			int it = rand() % hatNames.size();
			if (giverNames.front() != hatNames[it] && isNotSpouse(giverNames.front(), hatNames[it])) 
				//makes sure no one gets gift for themselves or spouse
			{
				giverReciever[giverNames.front()] = hatNames[it];
				giverNames.pop(); //gets rid of assigned giver to move onto next
				hatNames.erase(hatNames.begin() + it); //gets rid of assigned receiver to move onto another
				loopIt++;
			}
		}
	}
	printResults(giverReciever);

	/*
	cout << "\n\tPrimogeniture will get a gift for " << giverReciever["Primogeniture"] << "." << endl;
	cout << "\tBob will get a gift for " << giverReciever["Bob"] << "." << endl;
	cout << "\tKim will get a gift for " << giverReciever["Kim"] << "." << endl;
	cout << "\tBrandon will get a gift for " << giverReciever["Brandon"] << "." << endl;
	cout << "\tSummer will get a gift for " << giverReciever["Summer"] << "." << endl;
	cout << "\tBryson will get a gift for " << giverReciever["Bryson"] << "." << endl;
	cout << "\tCherie will get a gift for " << giverReciever["Cherie"] << "." << endl;
	cout << "\tTiffany will get a gift for " << giverReciever["Tiffany"] << "." << endl;
	cout << "\tSonia will get a gift for " << giverReciever["Sonia"] << "." << endl;
	cout << "\tTy will get a gift for " << giverReciever["Ty"] << "." << endl << endl;
	*/
	cout << "\n\n\tGod Bless us. Every one!" << endl <<endl;

	system("pause");
	return 0;
}