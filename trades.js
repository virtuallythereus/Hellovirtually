/* ============================================================
   Hello, virtually!  ·  trades.js
   Fuente unica de verdad para index.html y demo.html.
   Editar aqui cambia los dos.
   ============================================================ */
window.HV_TRADES = {
  roofing: {
    label:"Roofing", sub:"Request a roof estimate",
    q1:{q:"What is going on with the roof?",h:"Pick the closest one",o:["Active leak","Storm or hail damage","Full replacement","Not sure yet"]},
    q2:{q:"About how old is the roof?",h:"A rough guess is fine",o:["Under 10 years","10 to 20 years","Over 20 years","No idea"]},
    q3:{q:"Have you filed an insurance claim?",h:"",o:["Yes, already filed","No, not yet","I want help with that"]},
    seed:[
      {n:"Marcus Webb",m:"Shingles came off the back slope after Sunday's storm",s:"est",t:"Estimate sent Fri, follow up today"},
      {n:"Dana Ruiz",m:"Ceiling stain in the hallway, roof is about 18 years old",s:"est",t:"Estimate sent Fri, follow up today"},
      {n:"Tom Alvarez",m:"Full replacement, comparing three quotes",s:"con",t:"Contacted Mon"}
    ],
    task:"Send Marcus the revised shingle quote"
  },
  remodeling: {
    label:"Remodeling", sub:"Request a remodel estimate",
    q1:{q:"Which space are we talking about?",h:"Pick the closest one",o:["Kitchen","Bathroom","Basement","Addition"]},
    q2:{q:"How far along is the plan?",h:"",o:["Just exploring","Have a rough idea","Have drawings ready","Ready to start"]},
    q3:{q:"What range are you working with?",h:"This keeps the estimate realistic",o:["Under $15k","$15k to $40k","$40k to $80k","Over $80k"]},
    seed:[
      {n:"Priya Nair",m:"Kitchen gut, has cabinet selections already",s:"est",t:"Estimate sent Fri, follow up today"},
      {n:"Greg Sloan",m:"Master bath, wants to start after the holidays",s:"est",t:"Estimate sent Fri, follow up today"},
      {n:"Alicia Ford",m:"Basement finish, about 900 sq ft",s:"con",t:"Contacted Mon"}
    ],
    task:"Send Priya the cabinet allowance breakdown"
  },
  concrete: {
    label:"Concrete", sub:"Request a concrete estimate",
    q1:{q:"What are we pouring?",h:"Pick the closest one",o:["Driveway","Patio","Slab or foundation","Walkway or steps"]},
    q2:{q:"Roughly what size?",h:"A rough guess is fine",o:["Under 400 sq ft","400 to 800 sq ft","Over 800 sq ft","Not sure"]},
    q3:{q:"Is there existing concrete to remove?",h:"",o:["Yes, needs tear-out","No, bare ground","Partly"]},
    seed:[
      {n:"Bill Hanley",m:"Driveway tear-out and repour, about 700 sq ft",s:"est",t:"Estimate sent Fri, follow up today"},
      {n:"Sonia Cruz",m:"Back patio with a broom finish",s:"est",t:"Estimate sent Fri, follow up today"},
      {n:"Ray Dobbs",m:"Slab for a 12x16 shed",s:"con",t:"Contacted Mon"}
    ],
    task:"Send Bill the tear-out and repour numbers"
  },
  hvac: {
    label:"HVAC", sub:"Request an HVAC estimate",
    q1:{q:"What do you need?",h:"Pick the closest one",o:["Not cooling","Not heating","System replacement","Maintenance"]},
    q2:{q:"How old is the system?",h:"A rough guess is fine",o:["Under 5 years","5 to 12 years","Over 12 years","No idea"]},
    q3:{q:"How soon do you need someone?",h:"",o:["Today if possible","This week","Next couple weeks","Just pricing"]},
    seed:[
      {n:"Elena Marsh",m:"Upstairs unit not cooling, system is 14 years old",s:"est",t:"Estimate sent Fri, follow up today"},
      {n:"Chris Bode",m:"Wants a quote on a full changeout before summer",s:"est",t:"Estimate sent Fri, follow up today"},
      {n:"Nadia Kim",m:"Maintenance plan for two units",s:"con",t:"Contacted Mon"}
    ],
    task:"Send Elena the changeout options"
  },
  landscaping: {
    label:"Landscaping", sub:"Request a landscaping estimate",
    q1:{q:"What do you need done?",h:"Pick the closest one",o:["Irrigation or sprinklers","Sod or new lawn","Design and planting","Cleanup or maintenance"],d:3},
    q2:{q:"One time, or ongoing?",h:"This changes the price more than anything else",o:["One time job","Weekly","Every two weeks","Monthly"],d:0},
    q3:{q:"How much of the property?",h:"",o:["Front yard only","Back yard only","Front and back","Whole property, sides included"],d:2},
    q4:{q:"Is there irrigation on the property?",h:"Good to know before anyone digs",o:["Yes, needs work","Yes, works fine","No system","Not sure"],d:3},
    seed:[
      {n:"Hector Diaz",m:"Two zones not popping up, rest of the system is fine",s:"est",t:"Estimate sent Fri, follow up today"},
      {n:"Karen Whitt",m:"Full sod for the front yard, about 4,000 sq ft",s:"est",t:"Estimate sent Fri, follow up today"},
      {n:"Sam Peterson",m:"New beds and lighting along the walkway",s:"con",t:"Contacted Mon"}
    ],
    task:"Send Hector the zone repair quote"
  },
  cleaning: {
    label:"Cleaning", sub:"Request a cleaning quote",
    q1:{q:"What kind of clean?",h:"Pick the closest one",o:["Recurring home clean","Move-in or move-out","Post-construction","Office or commercial"]},
    q2:{q:"How big is the space?",h:"",o:["1 to 2 bedrooms","3 to 4 bedrooms","5 or more","Commercial space"]},
    q3:{q:"How often?",h:"",o:["One time","Every two weeks","Monthly","Weekly"]},
    seed:[
      {n:"Joanne Pratt",m:"Move-out clean, three bedrooms, keys on Friday",s:"est",t:"Estimate sent Fri, follow up today"},
      {n:"Devon Clarke",m:"Biweekly for a four bedroom",s:"est",t:"Estimate sent Fri, follow up today"},
      {n:"Rosa Lim",m:"Post-construction on a new build",s:"con",t:"Contacted Mon"}
    ],
    task:"Send Joanne the move-out quote"
  }
};

/* Checklist del hero: lo que hace falta saber antes de cotizar.
   Usado por index.html. demo.html no lo consume. */
window.HV_ASK = {
  roofing:{noun:"roofing",list:["Is there an active leak right now","How old is the roof","Has an insurance claim been filed","How many stories, and what is the access like","The property address"]},
  remodeling:{noun:"remodel",list:["Which space, exactly","How far along the plan is","What range they are working with","Whether drawings or selections are ready","The property address"]},
  concrete:{noun:"concrete",list:["What is being poured","Roughly what square footage","Whether there is existing concrete to tear out","Whether a truck can reach the pour","The property address"]},
  hvac:{noun:"HVAC",list:["Heating or cooling, and what it is doing","How old the system is","How many units, and what type","How soon they need someone out","The property address"]},
  landscaping:{noun:"landscaping",list:["What kind of work it is","One time or ongoing service","How much of the property is involved","Whether there is irrigation on site","The property address"]},
  cleaning:{noun:"cleaning",list:["What kind of clean it is","How big the space is","One time or recurring","Any pets or special surfaces","The property address"]}
};
