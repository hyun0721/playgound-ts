((args) => {

    let temp : Number = 1;
    let str : string = 'apple';

    console.log(`Debug...${temp}`);

    let el = <HTMLDivElement> document.querySelector("#test");

    el.innerHTML = '123123';

})();