var newman = require("newman");
let path =
  "C:/Users/saure/OneDrive/Entreprendre/Github/api_notes_user_storie/US/Scena_Nominal/Quest_4_users_stories_postman_collection.json";
newman.run(
  {
    collection: path,
    reporters: "htmlextra",
    reporter: {
      myreporter: {
        "option-name": "option-value", // this is optional
      },
    },
  },
  function (err, summary) {
    if (err) {
      throw err;
    }
    console.info("collection run complete!");
  }
);
