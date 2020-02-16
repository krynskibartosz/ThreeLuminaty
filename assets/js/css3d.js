let mouve = document.querySelector('.css3d');
console.log(mouve);


    mouve.addEventListener("mousemove", (e) => {
        let x = -e.clientX / 20
        let y = e.clientY / 22

        console.log(`l'axe X = ${x}`);
        console.log(`l'axe Y = ${y}`);
            mouve.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`
            console.log('première condition');
            //             mouve.style.transform = `rotateY(${y - 2}deg) rotateX(${x}deg)`
            // console.log('else');
            
    })

    mouve.addEventListener("mouseout", () => {
        mouve.style.transform = "none"
        mouve.style.transition = '.5s'
    })



    // let child1 = document.querySelector('.enfant1');
    // let child2 = document.querySelector('.enfant2');
    // let child3 = document.querySelector('.enfant3');
    // let child4 = document.querySelector('.enfant4');

    // document.getElementById('enfant1').addEventListener("mousemove", (e) => {
    //     let x = e.clientX;
    //     let y = e.clientY;
    //     console.log(`l'axe X = ${x} \n l'axe Y = ${y}`);
    //     console.log('ok');
    // })
    