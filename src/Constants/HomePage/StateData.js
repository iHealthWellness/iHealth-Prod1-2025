
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
    {'AS': 'American Samoa'},
    {'AZ': 'Arizona'},
    {'AR': 'Arkansas'},
    {'CA': 'California'},
    {'CO': 'Colorado'},
    {'CT': 'Connecticut'},
    {'DC': 'District of Columbia'},
    {'DE': 'Delaware'},
    {'FL': 'Florida'},
    {'FM': 'Federated States of Micronesia'},
    {'GA': 'Georgia'},
    {'GU': 'Guam'},
    {'HI': 'Hawaii'},
    {'IA': 'Iowa'},
    {'ID': 'Idaho'},
    {'IL': 'Illinois'},
    {'IN': 'Indiana'},
    {'KS': 'Kansas'},
    {'KY': 'Kentucky'},
    {'LA': 'Louisiana'},
    {'MA': 'Massachusetts'},
    {'MD': 'Maryland'},
    {'ME': 'Maine'},
    {'MH': 'Marshall Islands'},
    {'MI': 'Michigan'},
    {'MN': 'Minnesota'},
    {'MO': 'Missouri'},
    {'MP': 'Northern Mariana Islands'},
    {'MS': 'Mississippi'},
    {'MT': 'Montana'},
    {'NC': 'North Carolina'},
    {'ND': 'North Dakota'},
    {'NE': 'Nebraska'},
    {'NH': 'New Hampshire'},
    {'NJ': 'New Jersey'},
    {'NM': 'New Mexico'},
    {'NV': 'Nevada'},
    {'NY': 'New York'},
    {'OH': 'Ohio'},
    {'OK': 'Oklahoma'},
    {'ONT': 'Ontario'},
    {'OR': 'Oregon'},
    {'PA': 'Pennsylvania'},
    {'PR': 'Puerto Rico'},
    {'QC': 'Quebec'},
    {'RI': 'Rhode Island'},
    {'SC': 'South Carolina'},
    {'SD': 'South Dakota'},
    {'TN': 'Tennessee'},
    {'TX': 'Texas'},
    {'UT': 'Utah'},
    {'VA': 'Virginia'},
    {'VI': 'Virgin Islands'},
    {'VT': 'Vermont'},
    {'WA': 'Washington'},
    {'WI': 'Wisconsin'},
    {'WV': 'West Virginia'},
    {'WY': 'Wyoming'},
];





//     Regex to clean data fetch from DB
//     const regEx = /\b[A-Z]{2}\b(?![\w.-])/g;
