export function initNewTabLinks() {
    document.querySelectorAll('a.new_tab').forEach(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
  }
  