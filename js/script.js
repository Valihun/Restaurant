console.log('test')

// set current year
const year = document.querySelector('.year')
const currentYear = new Date().getFullYear()
year.textContent = currentYear

// mobile navigation
const btnNav = document.querySelector('.btn-mobile-nav')
const header = document.querySelector('.header')

btnNav.addEventListener('click', () => {
	header.classList.toggle('nav-open')
})

const allLinks = document.querySelectorAll('a:link')
allLinks.forEach(function (link) {
	link.addEventListener('click', function(e) {
		e.preventDefault()
		var href = link.getAttribute('href')

		if (href === "#") {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			})
		}
		// scroll to other links
		if (href !== "#" && href.startsWith("#")) {
			const section = document.querySelector(href)
			section.scrollIntoView({ behavior: "smooth" })
		}

		if (link.classList.contains('main__navlink'))
			header.classList.toggle('nav-open')
	})
});


// Sticky header (navigation)

const sectionHeroEl = document.querySelector('.section__hero')

var obs = new IntersectionObserver(function(entries) {
	const ent = entries[0]
	if (ent.isIntersecting === false) {
		document.body.classList.add('sticky')
	}

	if (ent.isIntersecting) {
		document.body.classList.remove('sticky')
	}
}, {
	// in the viewport
	root: null,
	threshold: 0,
	rootMargin: "-80px"
})
obs.observe(sectionHeroEl)

// FIXING FLEXBOX GAP PROPERTY MISING IN SAFARI VERSIONS

function checkFlexGap() {
	var flex = document.createElement('div');
	flex.style.display = "flex";
	flex.style.flexDirection = 'column';
	flex.style.rowGap = '1px';

	flex.appendChild(document.createElement('div'));
	flex.appendChild(document.createElement('div'));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add('no-flexbox-gap');
}

checkFlexGap();