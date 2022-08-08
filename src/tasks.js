export default function Tasks() {
  const changeSelectedBtn = (pathname) => {
    document.querySelectorAll('header nav ul li')
      .forEach(li => {
        li.children[0].pathname === pathname
          ? li.children[0].style.fontWeight = 700
          : li.children[0].style.fontWeight = 400
      })
  }

  return { changeSelectedBtn }
}