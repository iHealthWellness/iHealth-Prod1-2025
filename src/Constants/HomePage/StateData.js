
export function convertState(state) {
    // Check if the input is an abbreviation or full name
    if (state.length === 2) {
      return stateData[state];
    } else {
      // Reverse lookup: Find the key (abbreviation) by value (full name)
      return Object.keys(stateMapping).find(key => stateMapping[key] === state);
    }
  }


  export const stateData = [
    {'AL': 'Alabama'},
    {'AK': 'Alaska'},
    {'AZ': 'Arizona'},
    {'AR': 'Arkansas'},
    {'CA': 'California'},
    {'CO': 'Colorado'},
    {'CT': 'Connecticut'},
    {'DE': 'Delaware'},
    {'FL': 'Florida'},
    {'GA': 'Georgia'},
    {'HI': 'Hawaii'},
    {'ID': 'Idaho'},
    {'IL': 'Illinois'},
    {'IN': 'Indiana'},
    {'IA': 'Iowa'},
    {'KS': 'Kansas'},
    {'KY': 'Kentucky'},
    {'LA': 'Louisiana'},
    {'ME': 'Maine'},
    {'MD': 'Maryland'},
    {'MA': 'Massachusetts'},
    {'MI': 'Michigan'},
    {'MN': 'Minnesota'},
    {'MS': 'Mississippi'},
    {'MO': 'Missouri'},
    {'MT': 'Montana'},
    {'NE': 'Nebraska'},
    {'NV': 'Nevada'},
    {'NH': 'New Hampshire'},
    {'NJ': 'New Jersey'},
    {'NM': 'New Mexico'},
    {'NY': 'New York'},
    {'NC': 'North Carolina'},
    {'ND': 'North Dakota'},
    {'OH': 'Ohio'},
    {'OK': 'Oklahoma'},
    {'OR': 'Oregon'},
    {'PA': 'Pennsylvania'},
    {'RI': 'Rhode Island'},
    {'SC': 'South Carolina'},
    {'SD': 'South Dakota'},
    {'TN': 'Tennessee'},
    {'TX': 'Texas'},
    {'UT': 'Utah'},
    {'VT': 'Vermont'},
    {'VA': 'Virginia'},
    {'WA': 'Washington'},
    {'WV': 'West Virginia'},
    {'WI': 'Wisconsin'},
    {'WY': 'Wyoming'},
    {'AS': 'American Samoa'},
    {'DC': 'District of Columbia'},
    {'FM': 'Federated States of Micronesia'},
    {'GU': 'Guam'},
    {'MH': 'Marshall Islands'},
    {'MP': 'Northern Mariana Islands'},
    {'PW': 'Palau'},
    {'PR': 'Puerto Rico'},
    {'VI': 'Virgin Islands'}
  ];





//     Regex to clean data fetch from DB
//     const regEx = /\b[A-Z]{2}\b(?![\w.-])/g;
