const quotesData = [
    // "ప్రతి సమస్యకూ పరిష్కారం ఉంది. దాన్ని కనిపెట్టడమే మన పని.",
    // "అవకాశాలు కలిసివచ్చినప్పుడు వాటిని వినియోగించుకోండి.",
    // "నమ్మకం సగం విజయానికీ, సమయ పాలన పూర్తిగా విజయానికీ దారి చూపిస్తాయి.",
    // "బాధలతోనే బలహీనత కాదు, బాధలతోనే బలం కూడా పెరుగుతుంది.",
    // "సంఘర్షణలు ఎదుర్కొనే వారు మాత్రమే గొప్ప విజయాన్ని సాధిస్తారు.",
    // "పరాజయం వద్దు అనుకునేవారు, విజయం పొందడంలో విఫలమవుతారు.",
    // "తప్పు చేయడం తప్పు కాదు, కానీ తప్పుని ఒప్పుకోకపోవడం తప్పు.",
    // "సంతోషం మనిషి చేతుల్లోనే ఉంది, అదీ ఆలోచనల పైనే ఆధారపడి ఉంటుంది.",
    // "మనస్సు సమాధానం తెలిస్తే సమస్య కూడా సులువుగానే పరిష్కరించుకోవచ్చు.",
    // "తక్కువ సంతోషాన్ని ఆశించడం మనసుకు ఆనందాన్ని ఇస్తుంది.",
    // "గుర్తుంచుకోండి, మన ప్రయత్నాలు మనని మన గమ్యానికి చేరుస్తాయి.",
    // "కష్టపడి పని చేసినప్పుడు అందిన ఫలితం అమూల్యం.",
    // "ప్రతి కొత్త పాఠం మన జీవితాన్ని మారుస్తుంది.",
    // "ఆలోచన మంచి అయితే, ఆచరణ కూడా మంచే అవుతుంది.",
    // "సమయం పట్టు, అది మీకు విజయాన్ని ఇస్తుంది.",
    // "ఎంత సేపు నిద్ర పోతున్నావో కాదు, ఎంత కష్టపడుతున్నావో ముఖ్యం.",
    // "నిజాయితీతో ఉండే వారికి ఎప్పటికీ ఎదురులేకపోవచ్చు.",
    // "విజయం కోసం శ్రమ చేయని వారు విజయాన్ని పొందరు.",
    // "ప్రతి అవకాశాన్ని వినియోగించుకోండి, అది ఒక్కసారి మాత్రమే వస్తుంది.",
    // "జీవితం ఒక ప్రయాణం, ప్రతి రోజు పాఠం నేర్చుకోవాలి."

    "re halfway there." ,
"Success is not final; failure is not fatal." ,
"Your limitation—it’s only your imagination.",
"Dream it. Wish it. Do it.",
"Success doesn’t just find you; you have to go out and get it.",
"Do something today that your future self will thank you for.",
"Push yourself, because no one else is going to do it for you.",
"Great things never come from comfort zones.",
"Don’t stop when you’re tired. Stop when you’re done.",
"It always seems impossible until it’s done." ,
"Wake up with determination. Go to bed with satisfaction.",
"Little things make big days.",
"Dream bigger. Do bigger.",
"The harder you work for something, the greater you’ll feel when you achieve it.",
"Success is what happens after you’ve survived all your mistakes."









];

let quote=document.querySelector("div")

function randomQuote(){
      let singleQuote=Math.floor(Math.random() * quotesData.length)
      quote.textContent=quotesData[singleQuote]      
}