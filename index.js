document.addEventListener("DOMContentLoaded", () => {
    const jobLists = document.querySelector(".jobLists");
    function fetchData() {
        fetch('data.json')
            .then(response => response.json())
            .then(data => appendToDom(data))
    }
    fetchData()

    const appendToDom = (data) => {

        data.map(item => {
            const news = () => { return item.new ?`<label id="new">New</label>` : '';}
            const featured = () =>{ return item.featured ? `<label id="featured">Featured!</label>`: '';}

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
                                       <label for="postedAt">${item.postedAt} . ${item.contract} . ${item.location} </label> .
                                    
                                      </div>
        
                                     </div>`


            const rightSection = document.createElement('div')
            rightSection.className = 'rightSection'
            const button1 = document.createElement('button')
            button1.setAttribute('id', 'role')
            button1.innerText = item.role
            rightSection.appendChild(button1)
            const button2 = document.createElement('button')
            button1.setAttribute('id', 'level')
            button2.innerText = item.level
            rightSection.appendChild(button2)
            item.languages.map(language => {
                const buttons = document.createElement('button')
                buttons.setAttribute('class', 'languages')
                buttons.innerText = language
                rightSection.appendChild(buttons)
              


            })
            jobLists.appendChild(listContainer);
            listContainer.appendChild(leftSection);
            listContainer.appendChild(rightSection);

        })
    }
})













