import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './about-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-about')
export class AppAbout extends LitElement {
  static styles = [
    sharedStyles,
    styles
  ]

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>

      <main>
        <h2>About Page</h2>

        <sl-card>
          <h2>Did you know?</h2>

          <p>Cryptonit app a large-scale decentralized platform integrating a multitude of tools, resources and community driven An experimental information resource capable of creating a decentralized bridge controlled by the community to provide users with reliable and timely information of crypto space and provide possible assistance to investigations of loss of funds.

          About our mission:
          
          Launched the development of a proprietary web3.0 platform and governance token will allow you to keep up with the news and make it not only make finding important information more accessibility, but also will allow:
          
          keep up with security news in crypto
          will allow you to post an ad
          find a job or post your own job
          compare high and low risc projects
          hardware sale/purchase/service
          ratings of service centers and crypto communities based on votes
          comparison of returns on equipment/pools
          related products and services marketplace
          </p>

          <p>Check out <a
              href="https://github.com/Cryptonit63">these
              docs</a> to learn more about the advanced features that you can use in Cryptonit app</p>
        </sl-card>
  </main>
    `;
  }
}
