pageCreator = (returnedData) => {
  var htmlCard = "";

  for (var i = 0; i < returnedData.length; i++) {
    var keys = Object.keys(returnedData[i]);
    console.log(keys);
    var uniqueKey = keys[3];
    console.log(uniqueKey);
    var uniqueVariable = "";

    if (uniqueKey === "officeNumber") {
      uniqueVariable = `Office Number: ${returnedData[i].officeNumber}`;
    } else if (uniqueKey === "github") {
      uniqueVariable = `GitHub : ${returnedData[i].github}</a>`;
    } else {
      uniqueVariable = `School: ${returnedData[i].school}`;
    }

    var { name, id, email } = returnedData[i];
    htmlCard += `
    <div class="card column is-one-third">
    <header class="card-header">
      <p class="card-header-title">
        ${name}
      </p>
      <button class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </header>
    <div class="card-content">
      <div class="content">
        <ul>
            <li>Email:${email}</li>
            <li>ID: ${id}</li>
            <li>${uniqueVariable}</li>
        </ul>
        
        <br>
      </div>
    </div>
   
  </div>`;
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        
    
    </head>
    
    <body>
       
    
             ${htmlCard}
    
                
          
    
     
    
    
    
    </body>
    
    </html>`;
};

module.exports = pageCreator;
