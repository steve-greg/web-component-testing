class CurrentDate extends HTMLElement {
  render() {
    let date = new Date(Date.now());

    this.innerHTML = new Intl.DateTimeFormat("default", {
      year: this.getAttribute("year") || undefined,
      month: this.getAttribute("month") || undefined,
      day: this.getAttribute("day") || undefined,
      hour: this.getAttribute("hour") || undefined,
      minute: this.getAttribute("minute") || undefined,
      second: this.getAttribute("second") || undefined,
      timeZoneName: this.getAttribute("time-zone-name") || undefined,
    }).format(date);
  }

  connectedCallback() {
    this.render();
    setInterval(() => this.render(), 1000);
  }
}

customElements.define("current-date", CurrentDate);
