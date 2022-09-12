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
              <label id="new">New</label>
              <label id="featured">Featured</label>
            </div>
            <h3>${item.position}</h3>
            <div class="details">
              <label for="postedAt">${item.postedAt}</label> .
              <label for="contract">${item.contract}</label> .
              <label for="location">${item.location}</label>
            </div>
        
           </div>`
            jobLists.appendChild(listContainer);
            listContainer.appendChild(leftSection);

        })
    }
})













