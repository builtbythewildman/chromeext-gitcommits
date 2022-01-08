//pulling items from html
let headingText = document.querySelector(".heading");
let commitMsgBtn = document.querySelector(".commitMsgBtn");
let cheatSheetBtn = document.querySelector(".cheatSheetBtn");
let referencesBtn = document.querySelector(".referencesBtn");
let listContent = document.querySelector(".listContent");

//vars

let cheatSheetArr = ["<li><span class=\"badge bg-secondary\">git init</span> - initializes a brand new Git repository and begins tracking an existing directory. It adds a hidden subfolder within the existing directory that houses the internal data structure required for version control.</li>","<li><span class=\"badge bg-secondary\">git clone</span> - creates a local copy of a project that already exists remotely. The clone includes all the project's files, history, and branches.</li>","<li><span class=\"badge bg-secondary\">git add</span> - stages a change. Git tracks changes to a developer's codebase, but it's necessary to stage and take a snapshot of the changes to include them in the project's history. This command performs staging, the first part of that two-step process. Any changes that are staged will become a part of the next snapshot and a part of the project's history. Staging and committing separately gives developers complete control over the history of their project without changing how they code and work.</li>", "<li><span class=\"badge bg-secondary\">git commit</span> - saves the snapshot to the project history and completes the change-tracking process. In short, a commit functions like taking a photo. Anything that's been staged with git add will become a part of the snapshot with git commit.</li>", "<li><span class=\"badge bg-secondary\">git status</span> - shows the status of changes as untracked, modified, or staged.</li>", "<li><span class=\"badge bg-secondary\">git branch</span> - shows the branches being worked on locally.</li>", "<li><span class=\"badge bg-secondary\">git merge</span> - merges lines of development together. This command is typically used to combine changes made on two distinct branches. For example, a developer would merge when they want to combine changes from a feature branch into the main branch for deployment.</li>", "<li><span class=\"badge bg-secondary\">git pull</span> - updates the local line of development with updates from its remote counterpart. Developers use this command if a teammate has made commits to a branch on a remote, and they would like to reflect those changes in their local environment.</li>", "<li><span class=\"badge bg-secondary\">git push</span> - updates the remote repository with any commits made locally to a branch</li>"];
let commitMsgArr = ["<li>git commit -m title -m description</li>","<li><span class=\"badge bg-secondary\">feat</span> – a new feature is introduced with the changes</li>","<li><span class=\"badge bg-secondary\">fix</span> – a bug fix has occurred</li>","<li><span class=\"badge bg-secondary\">chore</span> – changes that do not relate to a fix or feature and don't modify src or test files</li>","<li><span class=\"badge bg-secondary\">refactor</span> – refactored code that neither fixes a bug nor adds a feature</li>","<li><span class=\"badge bg-secondary\">docs</span> – updates to documentation such as a the README or other markdown files</li>","<li><span class=\"badge bg-secondary\">test</span> – including new or correcting previous tests</li>","<li><span class=\"badge bg-secondary\">perf</span> – performance improvements</li>","<li><span class=\"badge bg-secondary\">ci</span> – continuous integration related</li>","<li><span class=\"badge bg-secondary\">build</span> – changes that affect the build system or external dependencies</li>","<li><span class=\"badge bg-secondary\">revert</span> – reverts a previous commit</li>"];

let referenceArr = ["<a href=\"https://docs.github.com/en/get-started/using-git/about-git\" target=\"_blank\">Using Git</a>","<a href=\"https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/\" target=\"_blank\">Write better git messages</a>"];

console.log(listContent)
//handle click events 
commitMsgBtn.addEventListener("click", ()=>{
headingText.innerText = "Commit Messages"
for(let i = 0; i < commitMsgArr.length; i++ ){
  console.log(commitMsgBtn[i])
 
}
});
cheatSheetBtn.addEventListener("click", ()=>{
  headingText.innerText = "Cheat Sheet"
  for(let i = 0; i < cheatSheetArr.length; i++ ){
    console.log(cheatSheetArr[i])
   
  }
});
referencesBtn.addEventListener("click", ()=>{
  headingText.innerText = "References"
  for(let i = 0; i < referenceArr.length; i++ ){
    console.log(referenceArr[i])
   
  }
});




