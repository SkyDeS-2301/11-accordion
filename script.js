const buttonsAccordion = document.querySelectorAll('.btn-accordion');
const panelsAccordion = document.querySelectorAll('.panel');

buttonsAccordion.forEach(button => {
	button.addEventListener('click', openSection)
})

function openSection(e) {
	const t = e.target;
	if (t.classList.contains('btn-accordion')) {
		buttonsAccordion.forEach((button, index) => {
			if (t === button) {
				if (t.classList.contains('show'))
				closeAllSection()
				buttonsAccordion[index].classList.add('active')
				panelsAccordion[index].classList.add('show')
			}
		})
	}
}

document.addEventListener('click', e => {
	const t = e.target;
	if(!t.classList.contains('btn-accordion')) {
		closeAllSection()
	}
})

function closeAllSection() {
	buttonsAccordion.forEach(button => {
		if(button.classList.contains('active')) {
			button.classList.remove('active')
		}
	})
	panelsAccordion.forEach(panel => {
		if(panel.classList.contains('show')) {
			panel.classList.remove('show')
		}
	})
}