window.onload = ()=>{


//pulling items from html
let headingText = document.querySelector(".heading");
let commitMsgBtn = document.querySelector(".commitMsgBtn");
let cheatSheetBtn = document.querySelector(".cheatSheetBtn");
let referencesBtn = document.querySelector(".referencesBtn");
let listContent = document.querySelector(".listContent");

//vars

let cheatSheetArr = ["git init - initializes a brand new Git repository and begins tracking an existing directory. It adds a hidden subfolder within the existing directory that houses the internal data structure required for version control.", "git clone - creates a local copy of a project that already exists remotely. The clone includes all the project's files, history, and branches.", "git add - stages a change. Git tracks changes to a developer's codebase, but it's necessary to stage and take a snapshot of the changes to include them in the project's history. This command performs staging, the first part of that two-step process. Any changes that are staged will become a part of the next snapshot and a part of the project's history. Staging and committing separately gives developers complete control over the history of their project without changing how they code and work.", "git commit - saves the snapshot to the project history and completes the change-tracking process. In short, a commit functions like taking a photo. Anything that's been staged with git add will become a part of the snapshot with git commit.", "git status - shows the status of changes as untracked, modified, or staged.", "git branch - shows the branches being worked on locally.", "git merge - merges lines of development together. This command is typically used to combine changes made on two distinct branches. For example, a developer would merge when they want to combine changes from a feature branch into the main branch for deployment.", "git pull - updates the local line of development with updates from its remote counterpart. Developers use this command if a teammate has made commits to a branch on a remote, and they would like to reflect those changes in their local environment.", "git push - updates the remote repository with any commits made locally to a branch"];
let commitMsgArr = ["git commit -m title -m description", "feat – a new feature is introduced with the changes", "fix – a bug fix has occurred", "chore – changes that do not relate to a fix or feature and don't modify src or test files", "refactor – refactored code that neither fixes a bug nor adds a feature", "docs – updates to documentation such as a the README or other markdown files", "test – including new or correcting previous tests", "perf – performance improvements", "ci – continuous integration related", "build – changes that affect the build system or external dependencies", "revert – reverts a previous commit"];

let referenceArr = ["Using Git(https://docs.github.com/en/get-started/using-git/about-git)", "Write better git messages(https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)"];

//handle click events 

commitMsgBtn.addEventListener("click", () => {
  headingText.innerText = "Commit Messages";
  listContent.innerHTML = "";
  commitMsgArr.forEach((item) => {
    let li = document.createElement("li");
    let text = document.createTextNode(item);
    li.appendChild(text)
    listContent.appendChild(li)
  })

});
cheatSheetBtn.addEventListener("click", () => {
  headingText.innerText = "Cheat Sheet"
  listContent.innerHTML = "";
  cheatSheetArr.forEach((item) => {
    let li = document.createElement("li");
    let text = document.createTextNode(item);
    li.appendChild(text)
    listContent.appendChild(li);
    
  })
});
referencesBtn.addEventListener("click", () => {
  headingText.innerText = "References"
  listContent.innerHTML = "";
  referenceArr.forEach((item) => {
    let li = document.createElement("li");
    let a = document.createElement("a")
    let text = document.createTextNode(item);
    li.appendChild(text)
    listContent.appendChild(li)
  })
});
}
