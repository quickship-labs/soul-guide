export interface Holiday {
  name: string;
  faith: string;
  date: string; // MM-DD format (for fixed dates) or calculation description
  year2026: string; // Actual date for 2026
  description: string;
}

export const holidays: Holiday[] = [
  // Christian Holidays
  {
    name: "Christmas",
    faith: "Christian",
    date: "12-25",
    year2026: "December 25, 2026",
    description: "Celebrates the birth of Jesus Christ. Christmas is one of the most important Christian holidays, observed with church services, gift-giving, and family gatherings."
  },
  {
    name: "Easter Sunday",
    faith: "Christian",
    date: "Variable (first Sunday after first full moon after spring equinox)",
    year2026: "April 5, 2026",
    description: "Commemorates the resurrection of Jesus Christ from the dead. Easter is the most significant holiday in Christianity, representing hope, renewal, and eternal life."
  },
  {
    name: "Good Friday",
    faith: "Christian",
    date: "Variable (Friday before Easter)",
    year2026: "April 3, 2026",
    description: "Observes the crucifixion and death of Jesus Christ. Christians attend solemn services and reflect on the sacrifice Jesus made for humanity."
  },
  {
    name: "Ash Wednesday",
    faith: "Christian",
    date: "Variable (46 days before Easter)",
    year2026: "February 18, 2026",
    description: "Marks the beginning of Lent, a 40-day period of fasting, prayer, and repentance. Christians receive ashes on their foreheads as a sign of mortality and penitence."
  },
  {
    name: "Palm Sunday",
    faith: "Christian",
    date: "Variable (Sunday before Easter)",
    year2026: "March 29, 2026",
    description: "Celebrates Jesus Christ's triumphal entry into Jerusalem, where people laid palm branches on the road before him. Marks the beginning of Holy Week."
  },
  {
    name: "Pentecost",
    faith: "Christian",
    date: "Variable (50 days after Easter)",
    year2026: "May 24, 2026",
    description: "Commemorates the descent of the Holy Spirit upon the apostles and followers of Jesus Christ. Considered the birthday of the Christian Church."
  },
  {
    name: "Epiphany",
    faith: "Christian",
    date: "01-06",
    year2026: "January 6, 2026",
    description: "Celebrates the revelation of God incarnate as Jesus Christ and commemorates the visit of the Magi to the Christ child."
  },
  {
    name: "All Saints' Day",
    faith: "Christian",
    date: "11-01",
    year2026: "November 1, 2026",
    description: "Honors all saints, known and unknown. A day to remember all those who have attained heaven and to celebrate their faithful witness."
  },

  // Islamic Holidays
  {
    name: "Eid al-Fitr",
    faith: "Islamic",
    date: "Variable (Islamic calendar)",
    year2026: "March 20-21, 2026",
    description: "Celebrates the end of Ramadan, the Islamic holy month of fasting. Muslims gather for prayers, give to charity, feast with family and friends, and exchange gifts."
  },
  {
    name: "Eid al-Adha",
    faith: "Islamic",
    date: "Variable (Islamic calendar)",
    year2026: "May 27-31, 2026",
    description: "The Festival of Sacrifice commemorates Abraham's willingness to sacrifice his son in obedience to God. Muslims perform the Hajj pilgrimage and sacrifice animals, distributing meat to the poor."
  },
  {
    name: "Ramadan",
    faith: "Islamic",
    date: "Variable (Islamic calendar, entire month)",
    year2026: "February 18 - March 19, 2026",
    description: "The holy month of fasting from dawn to sunset. Muslims abstain from food, drink, and other physical needs during daylight hours, focusing on prayer, reflection, and community."
  },
  {
    name: "Laylat al-Qadr",
    faith: "Islamic",
    date: "Variable (last 10 nights of Ramadan)",
    year2026: "March 14-15, 2026",
    description: "The Night of Power commemorates the night when the Quran was first revealed to Prophet Muhammad. Considered the holiest night of the year for Muslims."
  },
  {
    name: "Mawlid al-Nabi",
    faith: "Islamic",
    date: "Variable (Islamic calendar)",
    year2026: "September 4, 2026",
    description: "Celebrates the birthday of Prophet Muhammad. Muslims gather for prayers, listen to stories about the Prophet's life, and engage in charitable activities."
  },
  {
    name: "Islamic New Year",
    faith: "Islamic",
    date: "Variable (Islamic calendar)",
    year2026: "June 26, 2026",
    description: "Marks the beginning of the Islamic lunar calendar year. Commemorates the Hijra, Prophet Muhammad's migration from Mecca to Medina."
  },
  {
    name: "Day of Ashura",
    faith: "Islamic",
    date: "Variable (10th day of Muharram)",
    year2026: "July 5, 2026",
    description: "A day of fasting and remembrance. Sunnis commemorate Moses and the Israelites' exodus from Egypt; Shiites mourn the martyrdom of Husayn ibn Ali."
  },

  // Jewish Holidays
  {
    name: "Rosh Hashanah",
    faith: "Jewish",
    date: "Variable (Hebrew calendar)",
    year2026: "September 14-15, 2026",
    description: "The Jewish New Year, a time of reflection, prayer, and repentance. Marked by the sounding of the shofar (ram's horn) and festive meals with symbolic foods."
  },
  {
    name: "Yom Kippur",
    faith: "Jewish",
    date: "Variable (10 days after Rosh Hashanah)",
    year2026: "September 23, 2026",
    description: "The Day of Atonement, the holiest day in Judaism. Jews fast for 25 hours, pray, and seek forgiveness for sins committed during the past year."
  },
  {
    name: "Hanukkah",
    faith: "Jewish",
    date: "Variable (Hebrew calendar, 8 days)",
    year2026: "December 5-12, 2026",
    description: "The Festival of Lights commemorates the rededication of the Second Temple in Jerusalem. Jews light the menorah for eight nights and celebrate with traditional foods and games."
  },
  {
    name: "Passover",
    faith: "Jewish",
    date: "Variable (Hebrew calendar, 7-8 days)",
    year2026: "April 2-9, 2026",
    description: "Commemorates the liberation of the Israelites from slavery in Egypt. Jews hold Seder meals, retelling the Exodus story and eating symbolic foods."
  },
  {
    name: "Sukkot",
    faith: "Jewish",
    date: "Variable (5 days after Yom Kippur, 7 days)",
    year2026: "September 28 - October 4, 2026",
    description: "The Feast of Tabernacles commemorates the Israelites' 40 years in the desert. Jews build temporary shelters (sukkahs) and celebrate the autumn harvest."
  },
  {
    name: "Shavuot",
    faith: "Jewish",
    date: "Variable (50 days after Passover)",
    year2026: "May 22-23, 2026",
    description: "Celebrates the giving of the Torah at Mount Sinai. Jews study Torah through the night and eat dairy foods, commemorating this foundational moment in Jewish history."
  },
  {
    name: "Purim",
    faith: "Jewish",
    date: "Variable (Hebrew calendar)",
    year2026: "March 3, 2026",
    description: "Celebrates the salvation of the Jewish people from Haman's plot to destroy them in ancient Persia, as recorded in the Book of Esther. Marked by costume parties, gift-giving, and festive meals."
  },

  // Hindu Holidays
  {
    name: "Diwali",
    faith: "Hindu",
    date: "Variable (Hindu calendar, 5 days)",
    year2026: "October 20, 2026",
    description: "The Festival of Lights celebrates the victory of light over darkness and good over evil. Hindus light oil lamps, set off fireworks, exchange gifts, and worship Lakshmi, goddess of wealth."
  },
  {
    name: "Holi",
    faith: "Hindu",
    date: "Variable (Hindu calendar)",
    year2026: "March 6, 2026",
    description: "The Festival of Colors celebrates the arrival of spring and the triumph of good over evil. Participants throw colored powder and water at each other in joyful celebration."
  },
  {
    name: "Navaratri",
    faith: "Hindu",
    date: "Variable (Hindu calendar, 9 nights)",
    year2026: "September 21-29, 2026",
    description: "Nine nights dedicated to worshiping the divine feminine, particularly Goddess Durga. Celebrated with fasting, prayer, music, and dance performances."
  },
  {
    name: "Maha Shivaratri",
    faith: "Hindu",
    date: "Variable (Hindu calendar)",
    year2026: "February 17, 2026",
    description: "The Great Night of Shiva honors Lord Shiva, one of the principal deities of Hinduism. Devotees fast, meditate, and perform all-night vigils at Shiva temples."
  },
  {
    name: "Janmashtami",
    faith: "Hindu",
    date: "Variable (Hindu calendar)",
    year2026: "August 14, 2026",
    description: "Celebrates the birth of Lord Krishna, the eighth avatar of Vishnu. Hindus fast, sing devotional songs, and perform dramatic reenactments of Krishna's life."
  },
  {
    name: "Ganesh Chaturthi",
    faith: "Hindu",
    date: "Variable (Hindu calendar)",
    year2026: "August 30, 2026",
    description: "Honors the birth of Lord Ganesha, the elephant-headed god of wisdom and prosperity. Celebrated with elaborate clay statues, prayers, and festive processions."
  },
  {
    name: "Raksha Bandhan",
    faith: "Hindu",
    date: "Variable (Hindu calendar)",
    year2026: "August 2, 2026",
    description: "Celebrates the bond between brothers and sisters. Sisters tie protective threads (rakhis) around their brothers' wrists, and brothers pledge to protect their sisters."
  },

  // Buddhist Holidays
  {
    name: "Vesak (Buddha's Birthday)",
    faith: "Buddhist",
    date: "Variable (lunar calendar)",
    year2026: "May 12, 2026",
    description: "Celebrates the birth, enlightenment, and death of Buddha. Buddhists visit temples, meditate, give to charity, and decorate with lanterns and flowers."
  },
  {
    name: "Bodhi Day",
    faith: "Buddhist",
    date: "12-08",
    year2026: "December 8, 2026",
    description: "Commemorates the day Siddhartha Gautama attained enlightenment and became the Buddha. Buddhists meditate, study the Dharma, and decorate with lights."
  },
  {
    name: "Parinirvana Day",
    faith: "Buddhist",
    date: "02-15",
    year2026: "February 15, 2026",
    description: "Marks the death of Buddha and his entry into final nirvana. Buddhists meditate on death and impermanence, reflecting on Buddhist teachings."
  },
  {
    name: "Asalha Puja",
    faith: "Buddhist",
    date: "Variable (lunar calendar)",
    year2026: "July 11, 2026",
    description: "Celebrates Buddha's first sermon after his enlightenment. Buddhists visit temples, make offerings, and listen to teachings on the Dharma."
  },
  {
    name: "Uposatha",
    faith: "Buddhist",
    date: "Variable (lunar calendar, quarterly)",
    year2026: "Quarterly throughout 2026",
    description: "Buddhist observance days occurring on the new moon and full moon of each month. Buddhists recommit to following precepts, meditate, and study scriptures."
  },
  {
    name: "Magha Puja",
    faith: "Buddhist",
    date: "Variable (lunar calendar)",
    year2026: "February 11, 2026",
    description: "Commemorates a spontaneous gathering of 1,250 enlightened monks who came to hear Buddha speak. Celebrated with temple visits, meditation, and candlelit processions."
  },

  // Multi-faith/Other
  {
    name: "Winter Solstice",
    faith: "Various/Pagan",
    date: "12-21",
    year2026: "December 21, 2026",
    description: "Marks the shortest day and longest night of the year. Celebrated in various spiritual traditions as a time of renewal, reflection, and the return of the light."
  },
  {
    name: "Spring Equinox",
    faith: "Various/Pagan",
    date: "03-20",
    year2026: "March 20, 2026",
    description: "Marks the beginning of spring when day and night are equal. Celebrated as a time of balance, renewal, and new beginnings in many spiritual traditions."
  },
  {
    name: "Nowruz",
    faith: "Zoroastrian/Persian",
    date: "03-20",
    year2026: "March 20, 2026",
    description: "The Persian New Year celebrates the spring equinox and the renewal of nature. Observed by many communities across Central and Western Asia with family gatherings and symbolic foods."
  }
];

export function getHolidaysByFaith(faith: string): Holiday[] {
  return holidays.filter(h => h.faith.toLowerCase() === faith.toLowerCase());
}

export function getUpcomingHolidays(count: number = 5): Holiday[] {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  return holidays
    .map(holiday => {
      const dateStr = holiday.year2026.split(',')[0].trim();
      const [month, day] = dateStr.split(' ');
      const monthNum = new Date(Date.parse(month + " 1, 2026")).getMonth() + 1;
      const dayNum = parseInt(day);

      return {
        ...holiday,
        sortDate: monthNum * 100 + dayNum
      };
    })
    .filter(holiday => {
      const holidayDate = holiday.sortDate;
      const todayDate = currentMonth * 100 + currentDay;
      return holidayDate >= todayDate;
    })
    .sort((a, b) => a.sortDate - b.sortDate)
    .slice(0, count);
}

export const faiths = ["Christian", "Islamic", "Jewish", "Hindu", "Buddhist", "Various/Pagan", "Zoroastrian/Persian"];
