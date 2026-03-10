const WordRoots = [
  {
    "id": 1,
    "level": "Beginner",
    "root": "Ability",
    "phonetic": "/əˈbɪləti/",
    "origin": "Oxford 5000",
    "meaning": "能力",
    "meaning_en": "The power or skill to do something.",
    "description": "She has the ability to explain complex things simply.",
    "examples": [
      {
        "word": "Ability",
        "meaning": "能力",
        "explanation": "She has the ability to pass the exam."
      }
    ],
    "quiz": {
      "question": "What is 'Ability'?",
      "options": [
        "Skill",
        "Fruit",
        "Run",
        "Slow"
      ],
      "correctAnswer": 0
    }
  },
  {
    "id": 2,
    "level": "Beginner",
    "root": "Abandon",
    "phonetic": "/əˈbændən/",
    "origin": "Oxford 5000",
    "meaning": "放弃",
    "meaning_en": "To leave someone or something forever.",
    "description": "The sailors had to abandon the sinking ship.",
    "examples": [
      {
        "word": "Abandon",
        "meaning": "放弃",
        "explanation": "Never abandon your dreams."
      }
    ],
    "quiz": {
      "question": "Meaning of 'Abandon'?",
      "options": [
        "Leave",
        "Stay",
        "Keep",
        "Find"
      ],
      "correctAnswer": 0
    }
  },
  {
    "id": 3,
    "level": "Intermediate",
    "root": "Abstract",
    "phonetic": "/ˈæbstrækt/",
    "origin": "Oxford 5000",
    "meaning": "抽象的",
    "meaning_en": "Existing in thought or as an idea but not having a physical existence.",
    "description": "Truth and beauty are abstract concepts.",
    "examples": [
      {
        "word": "Abstract",
        "meaning": "抽象",
        "explanation": "It's an abstract painting."
      }
    ],
    "quiz": {
      "question": "What is 'Abstract'?",
      "options": [
        "Conceptual",
        "Concrete",
        "Simple",
        "Heavy"
      ],
      "correctAnswer": 0
    }
  },
  {
    "id": 4,
    "level": "Advanced",
    "root": "Academic",
    "phonetic": "/ˌækəˈdemɪk/",
    "origin": "Oxford 5000",
    "meaning": "学术的",
    "meaning_en": "Relating to schools, colleges, and universities.",
    "description": "The school has high academic standards.",
    "examples": [
      {
        "word": "Academic",
        "meaning": "学术",
        "explanation": "He is an academic expert."
      }
    ],
    "quiz": {
      "question": "Relating to 'Academic'?",
      "options": [
        "Education",
        "Sport",
        "Food",
        "Travel"
      ],
      "correctAnswer": 0
    }
  },
  {
    "id": 5,
    "level": "Intermediate",
    "root": "Accept",
    "phonetic": "/əkˈsept/",
    "origin": "Oxford 5000",
    "meaning": "接受",
    "meaning_en": "To agree to take something.",
    "description": "Please accept my apologies.",
    "examples": [
      {
        "word": "Accept",
        "meaning": "接受",
        "explanation": "They accepted the offer."
      }
    ],
    "quiz": {
      "question": "Meaning of 'Accept'?",
      "options": [
        "Receive",
        "Refuse",
        "Deny",
        "Lose"
      ],
      "correctAnswer": 0
    }
  },
  {
    "id": 6,
    "level": "Beginner",
    "root": "Accident",
    "phonetic": "/ˈæksɪdənt/",
    "origin": "Oxford 5000",
    "meaning": "事故",
    "meaning_en": "An event that happens by chance or that is undesirable.",
    "description": "He had a serious car accident last week.",
    "examples": [
      {
        "word": "Accident",
        "meaning": "事故",
        "explanation": "It was just an accident."
      }
    ],
    "quiz": {
      "question": "What is 'Accident'?",
      "options": [
        "Unplanned event",
        "Planned trip",
        "Dinner",
        "Success"
      ],
      "correctAnswer": 0
    }
  },
  {
    "id": 7,
    "level": "Intermediate",
    "root": "Accompany",
    "phonetic": "/əˈkʌmpəni/",
    "origin": "Oxford 5000",
    "meaning": "陪同",
    "meaning_en": "To go somewhere with someone as a companion.",
    "description": "Children under 14 must be accompanied by an adult.",
    "examples": [
      {
        "word": "Accompany",
        "meaning": "陪同",
        "explanation": "I will accompany you home."
      }
    ],
    "quiz": {
      "question": "Meaning of 'Accompany'?",
      "options": [
        "Go with",
        "Go away",
        "Stop",
        "Ignore"
      ],
      "correctAnswer": 0
    }
  },
  {
    "id": 8,
    "level": "Beginner",
    "root": "Achieve",
    "phonetic": "/əˈtʃiːv/",
    "origin": "Oxford 5000",
    "meaning": "达到；完成",
    "meaning_en": "To succeed in finishing something or reaching a goal.",
    "description": "She worked hard to achieve her goals.",
    "examples": [
      {
        "word": "Achieve",
        "meaning": "达到",
        "explanation": "You can achieve anything."
      }
    ],
    "quiz": {
      "question": "What is 'Achieve'?",
      "options": [
        "Accomplish",
        "Fail",
        "Give up",
        "Start"
      ],
      "correctAnswer": 0
    }
  },
  {
    "id": 9,
    "level": "Advanced",
    "root": "Acknowledge",
    "phonetic": "/əkˈnɒlɪdʒ/",
    "origin": "Oxford 5000",
    "meaning": "承认；鸣谢",
    "meaning_en": "To accept, admit, or recognize something.",
    "description": "They failed to acknowledge my presence.",
    "examples": [
      {
        "word": "Acknowledge",
        "meaning": "承认",
        "explanation": "Please acknowledge receipt."
      }
    ],
    "quiz": {
      "question": "Meaning of 'Acknowledge'?",
      "options": [
        "Recognize",
        "Ignore",
        "Forget",
        "Hide"
      ],
      "correctAnswer": 0
    }
  },
  {
    "id": 10,
    "level": "Beginner",
    "root": "Across",
    "phonetic": "/əˈkrɒs/",
    "origin": "Oxford 5000",
    "meaning": "穿过；在对面",
    "meaning_en": "From one side to the other of something.",
    "description": "He walked across the street.",
    "examples": [
      {
        "word": "Across",
        "meaning": "穿过",
        "explanation": "The store is across the road."
      }
    ],
    "quiz": {
      "question": "Meaning of 'Across'?",
      "options": [
        "From side to side",
        "Under",
        "Behind",
        "Inside"
      ],
      "correctAnswer": 0
    }
  }
];