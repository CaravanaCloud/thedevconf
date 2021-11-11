export const loadLandingPageFromId = async (id) => {
    // TODO: Load data from the API
    console.log('Load data from the API');

    return {
        id,
        canRegister: true,
        eventname:'TDC Future',

        supportedtracks:[
            'trilha 1',
            'trilha 2',
            'trilha 3',
            'trilha 4'
        ],

        schedule: [
            {
                datetime:'2021-08-24',
                rooms:[
                    {
                        title: 'Trilha Dados e Design no gb.tech | Sala Grupo Boticário',
                        talks:[
                            {
                                datetime:'10:00',
                                description: 'Talk 01'
                            },
                            {
                                datetime:'11:00',
                                description: 'Talk 02'
                            },
                            {
                                datetime:'12:00',
                                description: 'Talk 03'
                            },{
                                datetime:'13:00',
                                description: 'Talk 04'
                            }
                        ]
                    }
                ]
            },
            {
                datetime:'2021-08-25',
                rooms:[
                    {
                        title: 'Trilha Dados e Design no gb.tech | Sala Grupo Boticário',
                        talks:[
                            {
                                datetime:'10:00',
                                description: 'Talk 11'
                            },
                            {
                                datetime:'11:00',
                                description: 'Talk 22'
                            },
                            {
                                datetime:'12:00',
                                description: 'Talk 23'
                            },{
                                datetime:'13:00',
                                description: 'Talk 24'
                            }
                        ]
                    }
                ]
            },
            {
                datetime:'2021-08-26',
                rooms:[
                    {
                        title: 'Trilha Dados e Design no gb.tech | Sala Grupo Boticário',
                        talks:[
                            {
                                datetime:'10:00',
                                description: 'Talk 31'
                            },
                            {
                                datetime:'11:00',
                                description: 'Talk 32'
                            },
                            {
                                datetime:'12:00',
                                description: 'Talk 33'
                            },{
                                datetime:'13:00',
                                description: 'Talk 34'
                            }
                        ]
                    }
                ]
            }
        ],

        partner: {
            name: 'Grupo Boticário',
            logo: 'https://d335luupugsy2.cloudfront.net/cms/files/7916/1635771751/$2lq25y32wg5',
            color: 'rd-button-joq3m2m7'
        },
        expression: "3 + 8 = ?",
        expressionResult: 11,
        
        description: `No Grupo Boticário você vai encontrar infinitas possibilidades de
        impactar a vida de milhares de pessoas todos os dias e essa é a
        beleza do que estamos fazendo. E a tecnologia, mais que uma
        ferramenta, se tornou o caminho para a construção do maior
        ecossistema de beleza do mundo. 
        Quer saber mais? Vem conhecer a sala do gb.tech no TDC 😊`,
        
        iframes: [
            {
                url:'https://www.youtube.com/embed/oy9uEB9OrNM?controls=0'
            }
        ],
        
        banners: [
            
        ],
        
        confirmations: [
            {
                description: `Confirmo que estou ciente que meus dados serão compartilhados
                    com os patrocinadores Diamond e fornecedores desta edição para
                    os fins discriminados na política de privacidade do TDC.*`
            },
            {
                description: `op2`
            },
            {
                description: `opt3`
            }
        ]
    };
}