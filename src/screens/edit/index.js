import React from 'react'
import { Button } from 'soil'

const Edit = () => {
  return (
    <div className="content">
      
      <div className="edit-wrapper">
        <div className="header">
          <a href="/" className="font-soil label no-text-decoration"><i className="fa fa-chevron-left"></i> Voltar para o Farmbox</a>
        </div>
        <div className="sub-header">
          <span className="font-soil h2">
            Configurações da conta
            <span className="fbx-logo">
              <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M26.651 7.98714L14.1146 0.895485C13.7893 0.711322 13.3891 0.711322 13.0642 0.895176L0.524922 7.98714C0.199955 8.17038 0 8.51001 0 8.87772V23.0354C0 23.4028 0.199955 23.7428 0.524922 23.9263L13.0642 31.017C13.227 31.1096 13.408 31.1556 13.5888 31.1556C13.7705 31.1556 13.9518 31.1096 14.1146 31.017L26.651 23.9263C26.9754 23.7425 27.1759 23.4031 27.1759 23.0354V8.87772C27.1759 8.51001 26.9754 8.17038 26.651 7.98714Z" fill="#363E48"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M25.8155 8.44395L14.1236 1.83003C13.8202 1.65827 13.4469 1.65827 13.1439 1.82974L1.44934 8.44395C1.14626 8.61484 0.959778 8.9316 0.959778 9.27454V22.4785C0.959778 22.8212 1.14626 23.1382 1.44934 23.3094L13.1439 29.9224C13.2957 30.0088 13.4646 30.0516 13.6331 30.0516C13.8026 30.0516 13.9717 30.0088 14.1236 29.9224L25.8155 23.3094C26.1179 23.1379 26.305 22.8214 26.305 22.4785V9.27454C26.305 8.9316 26.1179 8.61484 25.8155 8.44395Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M13.627 3.22261V3.21143L13.6171 3.21702L13.6073 3.21143V3.22261L1.91956 9.83261V18.3004L13.6171 11.6851L25.3124 18.3004V9.83261L13.627 3.22261Z" fill="#CEF1F9"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.91956 18.3009L13.627 24.9212L25.3322 18.3009L13.6265 11.6797L1.91956 18.3009Z" fill="#ABEB69"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M3.23851 19.0434L14.5757 12.6328L15.1324 12.9115L3.7655 19.3414L5.03284 20.058L16.4947 13.5769L17.0517 13.8559L5.56052 20.3564L6.82766 21.073L18.4143 14.521L18.971 14.8L7.3548 21.371L8.38206 21.9519L19.8548 15.4652L20.4115 15.7444L8.90999 22.2505L10.1771 22.967L21.7735 16.4093L22.3314 16.6886L10.7044 23.2652L11.95 23.9695L23.6937 17.3534L24.2507 17.6318L12.4781 24.2682L13.6208 24.9143L25.3197 18.2975V19.8021L13.627 26.3969V26.4093L13.616 26.4031L13.6145 26.4039V26.4022L1.91956 19.7881V18.2975L3.23851 19.0434Z" fill="#276D33"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M25.3339 19.77V22.4079L13.6287 29.0285V26.3912L25.3339 19.77Z" fill="#20252B"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M13.637 29.0285V26.3912L1.9295 19.77V22.4079L13.637 29.0285Z" fill="#20252B"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M13.658 16.2607L13.5828 29.5133L2.01597 22.883L2.01597 9.71283L13.6184 16.2378L2.17423 9.61147L13.58 3.02637L25.1054 9.72845L15.8033 15.0386L25.2636 9.71283L25.2636 22.883L13.6967 29.5133L13.6983 16.2402L13.6602 16.262L13.658 16.2607Z" stroke="white" strokeWidth="0.636203" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="fbx-lbl">farmbox</span>
         </span>
        </div>

        <div className="wrapper-content">
          <div className="content">
            <span className="font-soil h2 mb-24 mt-32 text-center block">Gerenciar Conta</span>

            <div className="card">
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <span className="font-soil h3 block mb-16"><i className="fa fa-user"></i> Informações Pessoais</span>
                  <span className="font-soil font-body block mb-24">Informações básicas, como seu nome e foto, usadas no Farmbox.</span>

                  <span className="font-soil label block">Foto de Exibição</span>
                  <div className="mb-16">
                    <span className="nametag">
                      PL
                    </span>
                    <Button type="secondary" text="Adicionar" />
                  </div>

                  <div className="mb-16">
                    <span className="font-soil label block">Nome de exibição</span>
                    <input />
                  </div>
                  <div className="mb-16">
                    <span className="font-soil label block">Telefone</span>
                    <input />
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <span className="font-soil h3 block mb-16"><i className="fa fa-lock"></i> Acesso e Segurança</span>
                  <span className="font-soil font-body block mb-24">Configurações para ajudar você a manter sua conta segura.</span>
                  
                  <div className="card">
                    <div className="mb-16">
                      <span className="font-soil label block">Usuário</span>
                      <span className="font-soil information block">mokfa</span>
                    </div>
                    <div className="mb-16">
                      <span className="font-soil label block">Email</span>
                      <span className="font-soil information block">pedro@checkplant.com.br</span>
                    </div>
                    <div className="mb-16">
                      <span className="font-soil label block">Senha</span>
                      <span><i className="fa fa-key"></i> *******</span>
                    </div>
                    <div className="mb-16 text-center">
                      <Button type="link borderless" text="Editar" rightIcon="fa-pencil" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 flex">
                  <Button type="primary" text="Salvar" />
                  <Button type="link borderless" text="Cancelar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Edit;