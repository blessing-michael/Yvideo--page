const menu = [
    {
      id: 1,
      title: "contributing to open source",
      info: "the odin project",
      views: "39k views",
      img: "https://images.pexels.com/photos/15985569/pexels-photo-15985569/free-photo-of-cold-snow-wood-light.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "how i sarted a multimilion dollar business",
      info: "vera channel",
      views: "52k views",
      img: "https://images.pexels.com/photos/16733847/pexels-photo-16733847/free-photo-of-light-fashion-people-woman.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
     
    },
    {
      id: 3,
      title: "come with me to heathrow, London",
      info: "Tourist guy",
      views: "2k views",
      img: "https://images.pexels.com/photos/16952098/pexels-photo-16952098/free-photo-of-city-road-street-hotel.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
     
    },
    {
      id: 4,
      title: "fun drive across the city",
      info: "Michelle Adrain",
      views: "40k views",
      img: "https://images.pexels.com/photos/16015233/pexels-photo-16015233/free-photo-of-man-people-street-port.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
     
    },
    {
      id: 5,
      title: "how i landed my first role as a developer",
      info: "Bella Ace",
      views: "39k views",
      img: "https://images.pexels.com/photos/15985569/pexels-photo-15985569/free-photo-of-cold-snow-wood-light.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 6,
      title: "my fun summer adventure",
      info: "Peter Oscar",
      views: "5k views",
      img: "https://images.pexels.com/photos/14886945/pexels-photo-14886945.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    
    },
    {
      id: 7,
      title: "My first family fun boat trip",
      info: "kelly & kell",
      views: "90k views",
      img: "https://images.pexels.com/photos/6051741/pexels-photo-6051741.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      
    },
    {
      id: 8,
      title: "Africa's most misunderstood concepts",
      info: "Eno Richard",
      views: "39k views",
      img: "https://images.pexels.com/photos/1038043/pexels-photo-1038043.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 9,
      title: "Cook with me in my village",
      info: "Sarah Jones",
      views: "509k views",
      img: "https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=800",
     
    },
    {
      id: 10,
      title: "Most visited Hut in Nigeria",
      info: "Papa's Secret",
      views: "39k views",
      img: "https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=800",
     
    },
]
const section= document.querySelector(".one-realimage")
window.addEventListener("DOMContentLoaded", function () {
    displayMenu(menu)
})  
 function displayMenu(menuItems){
    let display= menuItems.map((item)=>{
        console.log(item.views)
        return `  <div class="real">
                        
       
        <div class="one">
                  
        <img src=${item.img} alt=${item.title} class="img">
        <div class="info" >
             <h4 class="info-h4">${item.title}</h4>
 <p class="info-p">${item.info}</p> 
          
            <p class="info-p" >${item.views}<span class="info-p"> . 9 years ago</span></p>

         </div>
         </div>`
    })
    display = display.join(" ")
    section.innerHTML
= display}