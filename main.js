function add_list(){


    const links = [
        {
          label: "Week 1 notes",
          url: "week1/index.html"
        },
        {
          label: "Week 2 notes",
          url: "week2/index.html"
        },
        {
          label: "Week 3 notes",
          url: "week3/index.html"
        },
        {
          label: "Week 4 notes",
          url: "week4/index.html"
        },
        {
          label: "Week 5 notes",
          url: "week5/index.html"
        },
        {
          label: "Week 7 notes",
          url: "week7/index.html"
        },
        {
          label: "Week 8 notes",
          url: "week8/index.html"
        },
        {
          label: "Week 9 notes",
          url: "week9/index.html"
        },
        {
          label: "Week 10 notes",
          url: "week10/index.html"
        },
        {
          label: "Project Proposel",
          url: "projectProposl/index.html"
        },
        {
          label: "Team Projects",
          url: "team_projects/index.html"
        },
        {
          label: "Challenge 1",
          url: "challenge/index.html"
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



