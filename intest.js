// const wrapper = document.querySelector('#wrapper');
// let isDrag = false; startPosition = 0; endPosition = 0;
// const dragging = (e) => {
//     if (isDrag) {
//         e.preventDefault();
//         // if ((startPosition - endPosition) > 200) {
//         //     next();
//         //     isDrag = false;
//         // }
//         // if ((startPosition - endPosition) < 200) {
//         //     previous();
//         //     isDrag = false;
//         // }
//     }
// }
// const dragStart = (e) => {
//     e.preventDefault();
//     isDrag = true;
//     startPosition = e.pageX || e.touches[0].pageX;
// }
// const dragEnd = (e) => {
//     isDrag = false;
//     endPosition = e.pageX || e.touches[0].pageX;
//     console.log("Distance : ");
//     console.log(startPosition - endPosition);

//     if ((startPosition - endPosition) > 200) {
//         next();
//         isDrag = false;
//     }
//     if ((startPosition - endPosition) < 200) {
//         previous();
//         isDrag = false;
//     }
// }
// const mouseleft = (e) => {
//     isDrag = false;
//     endPosition = e.pageX || e.touches[0].pageX;
//     console.log("Distance : ");
//     console.log(startPosition - endPosition);
// }

// wrapper.addEventListener('mousedown', dragStart);
// wrapper.addEventListener('touchstart', dragStart);
// wrapper.addEventListener('mousemove', dragging);
// wrapper.addEventListener('touchmove', dragging);
// wrapper.addEventListener('mouseup', dragEnd);
// wrapper.addEventListener('mouseleave', mouseleft);
// wrapper.addEventListener('touchend', dragEnd);
