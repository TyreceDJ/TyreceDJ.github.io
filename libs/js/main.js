async function createScroll() {
    await sleep(4000);

    $('body').css({'overflow-x':'hidden', 'overflow-y':'auto', 'position':'relative'});
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} 

createScroll();