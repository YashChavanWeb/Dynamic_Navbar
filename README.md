# Task :
Create an interactive navigation menu that changes color or style when scrolled or when hovering over a menu item. The navigation menu should have a fixed position and be visible on all pages. Use HTML to structure the menu, CSS to style it, and JavaScript to add interactivity, such as changing the background color or font color of the menu when it is scrolled or when a menu item is hovered over. 

Website Link :  https://yashchavanweb.github.io/Dynamic_Navbar/


## Demo : 
[https://github.com/YashChavanWeb/PRODIGY_WD_01/assets/112185595/6e27a1ac-2b86-46c5-a038-98868efdb332](https://github.com/YashChavanWeb/PRODIGY_WD_01/assets/112185595/fce330a6-8019-491e-8e15-e1daa92220e7)

# Learnings from the Project:

### Header:
1. Utilized `display: flex` to easily apply properties such as `justify-content` and `position` for better alignment and positioning.
2. Employed `flex` in the navigation section to align items on a single line, particularly useful for block elements arranged vertically.
3. Integrated transitions to facilitate smooth visual changes within the interface.
### Image Alignment:
1. Wrapped the image in a `div` and utilized `text-align` to center-align it, enhancing visual aesthetics.
### Footer:
1. Positioned the footer at the bottom with `bottom: 0`, ensuring it aligns at the page's bottom irrespective of its content.
2. Chose `position: relative` to avoid using `absolute`, preventing it from being relative to an image and ensuring it aligns at the page bottom.
### JavaScript Usage:
1. Employed JavaScript to dynamically change the header's color by creating a new class, `navbar-scrolled`, not initially declared in HTML.
2. Strategically ordered the CSS rules, beginning with the new class, followed by other elements like `.navbar li a`, allowing easy modification of their properties.
### Dropdown Menu:
1. Implemented a dropdown menu within the "Services" list using `ul`, `li`, and `a` elements, assigning a class to the `ul`.
2. Initially set `display: none` and `position: absolute` for the dropdown, ensuring it stays hidden and appears below its ancestor, "Services."
3. On hover, changed `display` to `block` to reveal the dropdown beneath, preventing it from appearing beside "Services" by avoiding the use of `flex`.
4. Extended the dropdown functionality to the scrolling properties, ensuring consistent behavior even with class changes.
