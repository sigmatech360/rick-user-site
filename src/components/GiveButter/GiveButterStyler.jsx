import { useEffect } from 'react';

function GiveButterStyler() {
  useEffect(() => {
    const interval = setInterval(() => {
      const widgets = document.querySelectorAll('.giveButterBtn');
      if(widgets.length > 0) {
        widgets.forEach((widget) => {
            if (widget && widget.shadowRoot) {
                
                const btnParent = widget.shadowRoot.querySelector('#pzBZ3p');
                const btnDialog = btnParent.shadowRoot.querySelector('givebutter-dialog');
                const donateBtn = btnDialog.querySelector('button');
                if (donateBtn) {
                    donateBtn.innerHTML = 'Donate Now';
                donateBtn.style.backgroundColor = '#348f99';
                donateBtn.style.color = 'white';
                donateBtn.style.borderRadius = '30px';
                donateBtn.style.padding = '21px';
                if(Array.from(widget.classList).includes('donate')){
                    donateBtn.style.fontWeight = '700';
                    donateBtn.style.fontSize = '17px';
                }
                
                donateBtn.onmouseenter = () => {
                    donateBtn.style.boxShadow = '5px 5px 5px rgba(0,0,0,0.2)'; // darker shade on hover
                };
                donateBtn.onmouseleave = () => {
                    donateBtn.style.boxShadow = 'none'; // original color
                };
                clearInterval(interval); // Stop checking once styled
                }
            }
        });     
    }
    }, 300);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return null; // This component doesn't render anything
}

export default GiveButterStyler;
