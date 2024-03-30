// IIFE
(() => {

	//Choose an array method to implement for each of the incomplete functions.
	//FOR/WHILE LOOPS OF ANY KIND ARE FORBIDDEN! You must use the available array functions to accomplish your goal.

	//Remember, you can chain together array function calls to attain your goals.
	// Ex: array.filter().map()
	
	// COMPLETE THE FOLLOWING FUNCTIONS BY IMPLEMENTING MAP, REDUCE, OR FILTER 
	// (or a combination) ON THE PROVIDED JSON DATA

	// ***Define the required ten functions below this line...
	
  const getGuntherCount = (json) => {
    // Extract episodes from JSON data
    const episodes = json._embedded.episodes;

    // Use the filter function to filter episodes where Gunther is mentioned in the summary
    const guntherEpisodes = episodes.filter(episode => {
        const summary = episode.summary.toLowerCase(); // Convert summary to lowercase for case-insensitive comparison
        return summary.includes('gunther');
    });

    // Return the count of Gunther episodes
    return guntherEpisodes.length;
};

const getTotalRuntimeMinutes = (json) => {
  // Extract episodes from JSON data
  const episodes = json._embedded.episodes;

  // Use map to extract runtime minutes of each episode
  const runtimeArray = episodes.map(episode => episode.runtime);

  // Use reduce to calculate the total runtime minutes
  const totalRuntimeMinutes = runtimeArray.reduce((total, current) => total + current, 0);

  return totalRuntimeMinutes;
};

const getTotalEpisodesInYear = (json, year) => {
  // Extract episodes from JSON data
  const episodes = json._embedded.episodes;

  // Use filter to get episodes aired in the specified year
  const episodesInYear = episodes.filter(episode => {
      const airDate = new Date(episode.airdate);
      return airDate.getFullYear() === parseInt(year);
  });

  // Use reduce to count the number of episodes
  const totalEpisodesInYear = episodesInYear.reduce((count, episode) => count + 1, 0);

  return totalEpisodesInYear;
};

const getFemaleCastMembers = (json) => {
  // Extract cast members from JSON data
  const cast = json._embedded.cast;

  // Use filter to get female cast members
  const femaleCast = cast.filter(member => member.person.gender === 'Female');

  // Use map to extract the names of female cast members
  const femaleCastNames = femaleCast.map(member => member.person.name);

  return femaleCastNames;
};

const getEpisodeTitles = (json, mention) => {
  // Extract episodes from JSON data
  const episodes = json._embedded.episodes;

  // Use filter to get episodes mentioning Ursula
  const ursulaEpisodes = episodes.filter(episode => {
      const summary = episode.summary.toLowerCase(); // Convert summary to lowercase for case-insensitive comparison
      return summary.includes(mention.toLowerCase());
  });

  // Use map to extract episode titles
  const ursulaEpisodeTitles = ursulaEpisodes.map(episode => episode.name);

  return ursulaEpisodeTitles;
};

const getCastMembersOver55 = (json) => {
  // Extract cast members from JSON data
  const cast = json._embedded.cast;

  // Use filter to get cast members over 55 years old
  const castOver55 = cast.filter(member => {
      const birthYear = new Date(member.person.birthday).getFullYear();
      const currentYear = new Date().getFullYear();
      return currentYear - birthYear > 55;
  });

  // Use map to extract the names of cast members over 55
  const castOver55Names = castOver55.map(member => member.person.name);

  return castOver55Names;
};

const getTotalRuntimeMinutesExcludingSeasonSix = (json) => {
  // Extract episodes from JSON data
  const episodes = json._embedded.episodes;

  // Filter out episodes from season 6
  const episodesExcludingSeasonSix = episodes.filter(episode => episode.season !== 6);

  // Use reduce to calculate the total runtime minutes excluding season 6 episodes
  const totalRuntimeMinutesExcludingSeasonSix = episodesExcludingSeasonSix.reduce((total, episode) => {
      return total + episode.runtime;
  }, 0);

  return totalRuntimeMinutesExcludingSeasonSix;
};

const getFirstFourSeasons = (json) => {
  // Extract episodes from JSON data
  const episodes = json._embedded.episodes;

  // Filter out episodes from the first four seasons
  const firstFourSeasonsEpisodes = episodes.filter(episode => episode.season <= 4);

  // Use map to extract season number and episode name
  const firstFourSeasonsInfo = firstFourSeasonsEpisodes.map(episode => {
      return {
          season: episode.season,
          name: episode.name
      };
  });

  return firstFourSeasonsInfo;
};

const getEpisodeTallyBySeason = (json) => {
  // Extract episodes from JSON data
  const episodes = json._embedded.episodes;

  // Group episodes by season
  const episodesBySeason = episodes.reduce((acc, episode) => {
      if (!acc[episode.season]) {
          acc[episode.season] = [];
      }
      acc[episode.season].push(episode);
      return acc;
  }, {});

  // Use map to calculate the total episodes for each season
  const episodeTallyBySeason = Object.keys(episodesBySeason).map(season => {
      return {
          season: season,
          totalEpisodes: episodesBySeason[season].length
      };
  });

  return episodeTallyBySeason;
};


const capitalizeTheFriends = (json) => {
  // Extract episodes from JSON data
  const episodes = json._embedded.episodes;

  // Words to capitalize
  const friendsNames = ['Joey', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Ross'];

  // Helper function to capitalize all letters in a word
  const capitalizeWord = (word) => {
      return word.toUpperCase();
  };

  // Capitalize the specified words in both name and summary of each episode
  const capitalizedEpisodes = episodes.map(episode => {
      // Capitalize names in the name
      const capitalizedName = friendsNames.reduce((name, friendName) => {
          const nameRegex = new RegExp(`\\b${friendName}\\b`, 'gi'); // 'gi' for case-insensitive matching
          return name.replace(nameRegex, capitalizeWord(friendName));
      }, episode.name);

      // Capitalize names in the summary
      const capitalizedSummary = friendsNames.reduce((summary, friendName) => {
          const summaryRegex = new RegExp(`\\b${friendName}\\b`, 'gi'); // 'gi' for case-insensitive matching
          return summary.replace(summaryRegex, capitalizeWord(friendName));
      }, episode.summary);

      // Return the episode with capitalized name and summary
      return { ...episode, name: capitalizedName, summary: capitalizedSummary };
  });

  return capitalizedEpisodes;
};


	// ***Define the required ten functions above this line...
	
	const outputFriendsInfo = (json) => {
		//DO NOT MODIFY THE CODE IN HERE...check the console for your functions' output

        //1 - Create a function called getGuntherCount() which returns the total number of episodes 
        // where the character Gunther is mentioned in the episode summary.
        console.log('--------------------------------');
        console.log(`Gunther Count: ${getGuntherCount(json)}`);

        //2 - Create a function called getTotalRuntimeMinutes() that totals all runtime minutes for all episodes
        console.log('--------------------------------');
        console.log(`Total Runtime Minutes: ${getTotalRuntimeMinutes(json)}`);

        //3 - Create a function called getDateRangeEpisodeCount() that returns the number of episodes that aired in the year 2000
        console.log('--------------------------------');
        console.log(`Total episodes airing in year 2000: ${getTotalEpisodesInYear(json, "2000")}`);

        //4 - Create a function called getFemaleCastMembers() that returns an array of the names of the female cast members.
        console.log('--------------------------------');
        console.log(`Female Cast Members:`);
        console.log(getFemaleCastMembers(json));

        //5 - Create a function called getEpisodeTitles() which returns a list of episode
        //    where the argument string is found in the episode summary.
        console.log('--------------------------------');
        console.log(`Episodes that mention Ursula:`);
        console.log(getEpisodeTitles(json, 'Ursula'));

        //6 - Create a function called getCastMembersOver55() which returns a list of cast members
        //    who are currently older than 55 years of age.
        console.log('--------------------------------');
        console.log(`Cast Members over 55:`);
        console.log(getCastMembersOver55(json));

        //7 - Create a function called getTotalRuntimeMinutesExcludingSeasonSix that gets the total 
        //    runtime minutes for all episodes excluding episodes in season 6
        console.log('--------------------------------');
        console.log(`Total runtime in minutes excluding Season 6: ${getTotalRuntimeMinutesExcludingSeasonSix(json)}`);
    
        //8 - Create a function called getFirstFourSeasons that gets the episodes for the first four seasons 
        //    but only return an array of JSON objects containing the season number and episode name
        console.log('--------------------------------');
        console.log(`Episode JSON for first four seasons:`)
        console.log(getFirstFourSeasons(json));

        //9 - Create a function called getEpisodeTallyBySeason that returns an object containing the season name and the total episodes as key:value pairs for each season
        console.log('--------------------------------');
        console.log(`Tally of episodes by season:`);
        console.log(getEpisodeTallyBySeason(json));

        //10 - Create a function called capitalizeTheFriends that transforms the episode JSON data by capitalizing the words Joey, Chandler, Monica, Rachel, Phoebe, and Ross in both 
        //the name and summary of the episodes.
        console.log('--------------------------------');
        console.log('Capitalized Friends');
        console.log(capitalizeTheFriends(json));
	};

	//Get data for the TV Show "Friends"
	const fetchFriends = async() => {
		
		//DO NOT MODIFY THE CODE IN HERE...
		const response = await fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast');
		const json = await response.json();
	
		outputFriendsInfo(json);
		
    };
	
	fetchFriends();
	console.log("Fetching Friends Data...");

})();

