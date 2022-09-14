
const jobLists = document.querySelector(".jobLists");
const filter = document.querySelector(".filter");

// FUNCTION THAT FETCHES DATA
function fetchData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {


            // FUNCTION THAT APPENDS ITEMS TO THE DOM
            const appendToDom = (data) => {

                data.map(item => {
                    const news = () => { return item.new ? `<label id="new">New</label>` : ''; }
                    const featured = () => { return item.featured ? `<label id="featured">Featured!</label>` : ''; }

                    const listContainer = document.createElement('div');
                    listContainer.className = 'list-container';
                    const leftSection = document.createElement('div');
                    leftSection.className = 'leftSection';
                    leftSection.innerHTML = ` <div class="image">
                                      <img src="${item.logo}" alt="" srcset="">
                                     </div>
                                     <div class="jobContent">
                                      <div class="section1">
                                       <h4>${item.company}</h4>
                                      <span>${news()}</span>
                                    <span>${featured()}</span> 
                                      </div>
                                       <h3>${item.position}</h3>
                                      <div class="details">
                                       <label for="postedAt">${item.postedAt} . ${item.contract} . ${item.location} </label> 
                                      </div>
                                     </div>`


                    const rightSection = document.createElement('div')
                    rightSection.className = 'rightSection'
                    const button1 = document.createElement('button')
                    button1.setAttribute('id', 'role')
                    button1.innerText = item.role
                    button1.addEventListener('click', () => {
                        filterRole(item.role)
                    })
                    rightSection.appendChild(button1)
                    const button2 = document.createElement('button')
                    button2.setAttribute('id', 'level')
                    button2.innerText = item.level
                    button2.addEventListener('click', () => {
                        filterRole(item.level)
                    })
                    rightSection.appendChild(button2)
                    item.languages.map(language => {
                        const buttons = document.createElement('button')
                        buttons.setAttribute('class', 'languages')
                        buttons.innerText = language
                        buttons.addEventListener('click', () => {
                            filterRole(language)
                        })
                        rightSection.appendChild(buttons)

                    })
                    item.tools.map(tool => {
                        const btnTool = document.createElement('button')
                        btnTool.setAttribute('class', 'tools')
                        btnTool.innerText = tool
                        btnTool.addEventListener('click', () => {
                            filterRole(tool)
                        })
                        rightSection.appendChild(btnTool)

                    })
                    jobLists.appendChild(listContainer);
                    listContainer.appendChild(leftSection);
                    listContainer.appendChild(rightSection);

                })

            }

            appendToDom(data)
            const filterContainer = document.createElement('div');
            filterContainer.className = 'filter-container';
            const btn = document.createElement('div');
            btn.className = 'btn';
            const clear = document.createElement('div');
            clear.className = 'clear';
           
            
            // FUNCTION THAT RENDERS THE FILTER BUTTONS AND FILTERED ITEMS
            function filterRole(item) {
                jobLists.innerHTML = ''
                btn.innerHTML += `<div class="btn-container">
                         <button onClick="fetches"> ${item}</button><i class="fa fa-close" onClick="clearEl()"></i>
                        </div>`
                clear.innerHTML = ` <label for="" onClick="clears()">Clear </label>`
                filter.appendChild(filterContainer);
                filterContainer.appendChild(btn);
                filterContainer.appendChild(clear);
                
                // FILTERS DATA DEPENDING ON THE SELECTRED BUTTON AND RENDERS TO DOM
                const fil = data.filter(items => {
                    const lan = items.languages.map(language => language).join(', ');
                    const tool = items.tools.map(tool => tool).join(', ')
                    console.log(lan)
                    return items.role === item || items.level === item || lan === item || tool === item? items : null
                })
                appendToDom(fil)
        
            }
            // function clears () {
            //     btn.innerHTML = '';
            //     filterContainer.remove();
            // }
          
        })
      
}
fetchData()













