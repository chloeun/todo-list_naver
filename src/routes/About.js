import { Component } from '../core/chloeun'
import aboutStore from '../store/about'

export default class About extends Component {
  render() {
    const { photo, name, email, blog } = aboutStore.state

    this.el.classList.add('about')
    this.el.innerHTML = /* html */ `
    <div class='content'>
      <div class = 'content-head'>
        <h1>네이버 소개</h1>
        <p>네이버는 수많은 SME와 창작자, 파트너들이 미래 기술을 활용해 </p>
        <p>글로벌 시장에서 더 큰 성장을 이룰 수 있도록 지원하는 글로벌 테크 플랫폼입니다.</p>
        <img src="/aboutnaver.jpeg">  
      </div>
      <div class = 'content-middle'>
        <h2 class= 'content-left'>NAVER</h2>
        <p class= 'content-right'>네이버(주)는 글로벌 ICT 기업으로서 한국 최대 검색포털 네이버를 서비스하고 있고, 그 계열사에서 모바일 메신저 라인, 동영상<br> 
          카메라 스노우,디지털 만화 서비스 네이버웹툰, 메타버스 서비스 제페토 등을 서비스하고 있습니다. 또한, 네이버(주)는 인공지능,<br>
          인공지능, 로보틱스, 모빌리티 등 미래 기술에 대한 지속적인 연구개발을 통해 기술 플랫폼의 변화와 혁신을 추구하며 세계 각국의  <br>
          수많은 이용자와 다양한 파트너들이 함께 성장할 수 있도록 노력하고 있습니다.
        </p>
      </div> 
      <div class = 'content-end'>
        <h2>PROFILE</h2>
        <div class='grid-container'>
          <div class = 'grid-item'>Name</div>
          <div class = 'grid-item'>${name}</div>
          <div class = 'grid-item'>Email</div>
          <div class = 'grid-item'>${email}</div>
          <div class = 'grid-item'>Blog</div>
          <div class = 'grid-item'>${blog}</div>
        </div>
      </div> 
    </div>
    `
  }


  
}