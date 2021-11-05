function generateManager(man){
   return `
        <div class="team-member">
            <div class="head">
                <h3>${man.getName()}</h3>
                <h4>${man.getRole()}</h4>
            </div>
            <div class="info">
                <p>ID: ${man.getId()}</p>
                <p>Email: <a href="mailto: ${man.getEmail()}">${man.getEmail()}</a></p>
                <p>Office Number: ${man.getOfficeNum()}</p>
            </div>
        </div>

    `
}
function generateEnginner(eng) {
    if(eng.length === 0){
        return
    } else {
        return `
            ${eng
                .map( curEng => {
                    return `
                    <div class="team-member">
                        <div class="head">
                            <h3>${curEng.getName()}</h3>
                            <h4>${curEng.getRole()}</h4>
                        </div>
                        <div class="info">
                            <p>ID: ${curEng.getId()}</p>
                            <p>Email: <a href="mailto: ${curEng.getEmail()}">${curEng.getEmail()}</a></p>
                            <p>GitHub: <a href="github.com/${curEng.getGithub()}">${curEng.getGithub()}</a></p>
                        </div>
                    </div>
                    `
                })
                .join('')
            }
        `
    }
}
function generateIntern(int){
    if(int.length === 0){
        return
    } else {
        return `
            ${int
                .map( curInt => {
                    return `
                    <div class="team-member">
                        <div class="head">
                            <h3>${curInt.getName()}</h3>
                            <h4>${curInt.getRole()}</h4>
                        </div>
                        <div class="info">
                            <p>ID: ${curInt.getId()}</p>
                            <p>Email: <a href="mailto: ${curInt.getEmail()}">${curInt.getEmail()}</a></p>
                            <p>School: ${curInt.getSchool()}</p>
                        </div>
                    </div>
                    `
                })
                .join('')
            }
        `
    }
}






function generate (man, eng, int) {
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="styles.css">
    </head>
  
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main class="team">
            ${generateManager(man)}
            ${generateEnginner(eng)}
            ${generateIntern(int)}
      </main>
    </body>
    </html>
    `;
};
module.exports = generate;
