function add_list(){


    const links = [
        {
          label: "Week 1 notes",
          url: "week1/index.html"
        },
        {
          label: "Week 2 notes",
          url: "week2/index.html"
        }
      ]

      links.forEach(link => {
        let list = document.querySelector('#ordered_list');
        let a = document.createElement('a')
        a.textContent = `${link.label}`


        a.setAttribute('href', link.url)
        let li = document.createElement('li')
        li.appendChild(a)

        list.appendChild(li)
      })


      
}

function footer_date(){
    let date = new Date()
    let year = date.getFullYear()

    document.getElementById('year').textContent = year;
}

add_list()
footer_date()