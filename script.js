document.addEventListener("DOMContentLoaded", function () {
  const box = document.querySelector(".box");

  // Get computed styles of the box
  const style = window.getComputedStyle(box);

  // Parse all values (remove 'px' and convert to numbers)
  const width = parseInt(style.width);
  const padding = parseInt(style.paddingLeft) + parseInt(style.paddingRight);
  const border = parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth);
  const margin = parseInt(style.marginLeft) + parseInt(style.marginRight);

  // Calculate total width
  const totalWidth = width + padding + border + margin;

  console.log(`Box Content Width: ${width}px`);
  console.log(`Total Box Width (with padding, border, margin): ${totalWidth}px`);

  // Optional: show result on page
  const info = document.createElement("p");
  info.textContent = `Total Box Width (including padding, border, margin): ${totalWidth}px`;
  info.style.fontWeight = "bold";
  box.after(info);
});