document.addEventListener("DOMContentLoaded", function() {
//code adapted from Gaynor,2015
//In home page, the buttons will move upwards when mosue hovers over it and returns to normal size size when mouse move away.
document.querySelectorAll('.btn').forEach(btn => {
    btn.onmouseover = () => btn.style.transform = 'translateY(-8px)';
    btn.onmouseout = () => btn.style.transform = 'translateY(0)';
});
//end of adapted code

//code adpated from Stock Overflow, 2022
//All pages that has images will become larger when mouse hovers over it but does back to it's nromal size when mouse overs away.
document.querySelectorAll('img').forEach(img => {
    img.onmouseover = () => img.style.transform = 'scale(1.08)';
    img.onmouseout = () => img.style.transform = 'scale(1)';
});
//end of adpated code

//code adapted from w3schools, n.d.
// The navigation links for all pages will become bolder when mouse hovers over it but goes back to normal when mouse moves away.
    document.querySelectorAll('.nav-links a, .nav-box').forEach(link => {
        link.onmouseover = () => {
            link.style.transform = 'scale(1.2)';
            link.style.fontWeight = 'bold';
        };
        link.onmouseout = () => {
            link.style.transform = 'scale(1)';
            link.style.fontWeight = '';
        };
    });
    //end of adpated code
});
