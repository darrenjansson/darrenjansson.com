<script module>
  const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  export const closeNav = () => {
    document.querySelector('body').classList.remove('nav-open');
  }

  export const getYears = (year) => {
    const count = new Date().getFullYear() - year;
    return count < 10 ? numbers[count-1] : count;
  }

  export const toggleNav = () => {
    document.querySelector('body').classList.toggle('nav-open');
  }
</script>
