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
    if(!eng){
        return
    } else {
        return `
        <div class="team-member">
            <div class="head">
                <h3>${eng.getName()}</h3>
                <h4>${eng.getRole()}</h4>
            </div>
            <div class="info">
                <p>ID: ${eng.getId()}</p>
                <p>Email: <a href="mailto: ${eng.getEmail()}">${eng.getEmail()}</a></p>
                <p>GitHub: <a href="github.com/${eng.getGithub()}>${eng.getGithub()}</a></p>
            </div>
        </div>
        
        `
    }
}
function generateInter(int){
    if(!int){
        return
    } else {
        return `
        <div class="team-member">
            <div class="head">
                <h3>${int.getName()}</h3>
                <h4>${int.getRole()}</h4>
            </div>
            <div class="info">
                <p>ID: ${int.getId()}</p>
                <p>Email: <a href="mailto: ${int.getEmail()}">${int.getEmail()}</a></p>
                <p>School: ${int.getSchool()}</p>
            </div>
        </div>
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
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main class="team">
            ${generateManager(man)}
            ${generateEnginner(eng)}
            ${generateInter(int)}
      </main>
    </body>
    </html>
    `;
};
module.exports = generate;
