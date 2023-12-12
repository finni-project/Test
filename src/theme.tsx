const height = {
    topbar:"3.5rem",
    navbar:"4.313rem",
    topPadding:"2rem",
    bottomPadding: "0.5rem"
}

const iconBtns = {
    primary:`
        width: 54px;
        height: 54px;
        border-radius: 100%;
        background-color: #5E4EF4;
        display: flex;
        justify-content: center;
        align-items: center;
        path{
            fill: #FFFFFF;
        }
        cursor: pointer;
        &:hover{
            background-color: #3B2BCA
        }
        &[data-disabled=true]{
            pointer-events: none;
            background-color: #B6AEF9;
        }
    `,
    secondary:`
        width: 54px;
        height: 54px;
        border: 2px solid #5E4EF4;
        border-radius: 100%;
        background-color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        path{
            fill: #5E4EF4;
        }
        cursor: pointer;
        &:hover{
            border-color: #3B2BCA;
            path{
                fill: #3B2BCA;
            }
        }
        &[data-disabled=true]{
            pointer-events: none;
            border-color: #B6AEF9;
            path{
                fill: #B6AEF9;
            }
        }
    `
}

const plusBtns = {
    primary: `
        display: inline-flex;
        justify-content: center;
        align-items: center;
        path{
            fill: #5E4EF4;
        }
        cursor: pointer;
        &:hover{
            path{
                fill: #3B2BCA;
            }
        }
        &[data-disabled=true]{
            pointer-events: none;
            path{
                fill: #B6AEF9;
            }
        }
    `,
    secondary: `
        display: inline-flex;
        justify-content: center;
        align-items: center;
        path{
            fill: #777777;
        }
        cursor: pointer;
        &:hover{
            path{
                fill: #000000;
            }
        }
        &[data-disabled=true]{
            pointer-events: none;
            path{
                fill: #B7B7B7;
            }
        }
    `
}

const mediumBtns = {
    primary: `
        font-family: 'SF Pro';
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.004em;
        font-weight: 700;
        border: 0;
        border-radius: 8px;
        background-color: #5E4EF4;
        color: #FFFFFF;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        padding: 0.9375rem 1.5rem;
        gap: 8px;
        cursor: pointer;
        &:hover{
            background-color: #3B2BCA;
        }
        &[data-disabled=true]{
            pointer-events: none;
            background-color: #B6AEF9;
        }
    `,
    secondary: `
        font-family: 'SF Pro';
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.004em;
        font-weight: 700;
        border: 0;
        border-radius: 8px;
        background-color: #F2F0FE;
        color: #5E4EF4;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        padding: 15px 24px;
        gap: 8px;
        cursor: pointer;
        &:hover{
            color: #3B2BCA;
            path{
                fill: #3B2BCA;
            }
        }
        &[data-disabled=true]{
            pointer-events: none;
            color: #B6AEF9;
            path{
                fill: #B6AEF9;
            }
        }
    `,
    tertiary: `
        white-space: nowrap;
        font-family: 'SF Pro';
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.004em;
        font-weight: 700;
        border: 0;
        border-radius: 8px;
        background-color: #EFEFEF;
        color: #777777;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        padding: 0.9375rem 1.5rem;
        gap: 8px;
        cursor: pointer;
        &:hover{
            color: #000000;
            path{
                fill: #000000;
            }
        }
        &[data-disabled=true]{
            pointer-events: none;
            color: #B7B7B7;
            path{
                fill: #B7B7B7;
            }
        }
    `,
    delete: `
        font-family: 'SF Pro';
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.004em;
        font-weight: 700;
        border: 0;
        border-radius: 8px;
        background-color: #F04438;
        color: #FFFFFF;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        padding: 15px 24px;
        gap: 8px;
        cursor: pointer;
        &:hover{
            background-color: #C43127;
        }
        &[data-disabled=true]{
            pointer-events: none;
            background-color: #F79E97;
        }
    `
}
const largeBtns = {
    primary: `
        font-family: 'SF Pro';
        font-size: 17px;
        line-height: 22px;
        letter-spacing: -0.004em;
        font-weight: 700;
        border: 0;
        border-radius: 8px;
        background-color: #5E4EF4;
        color: #FFFFFF;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 52px;
        padding: 15px 24px;
        gap: 8px;
        cursor: pointer;
        &:hover{
            background-color: #3B2BCA;
        }
        &[data-disabled=true]{
            pointer-events: none;
            background-color: #B6AEF9;
        }
    `,
    secondary: `
        font-family: 'SF Pro';
        font-size: 17px;
        line-height: 22px;
        letter-spacing: -0.004em;
        font-weight: 700;
        border: 0;
        border-radius: 8px;
        background-color: #F2F0FE;
        color: #5E4EF4;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 52px;
        padding: 15px 24px;
        gap: 8px;
        cursor: pointer;
        &:hover{
            color: #3B2BCA;
            path{
                fill: #3B2BCA;
            }
        }
        &[data-disabled=true]{
            pointer-events: none;
            color: #B6AEF9;
            path{
                fill: #B6AEF9;
            }
        }
    `,
    tertiary: `
        font-family: 'SF Pro';
        font-size: 17px;
        line-height: 22px;
        letter-spacing: -0.004em;
        font-weight: 700;
        border: 0;
        border-radius: 8px;
        background-color: #EFEFEF;
        color: #777777;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 52px;
        padding: 15px 24px;
        gap: 8px;
        cursor: pointer;
        &:hover{
            color: #000000;
            path{
                fill: #000000;
            }
        }
        &[data-disabled=true]{
            pointer-events: none;
            color: #B7B7B7;
            path{
                fill: #B7B7B7;
            }
        }
    `,
    delete: `
        font-family: 'SF Pro';
        font-size: 17px;
        line-height: 22px;
        letter-spacing: -0.004em;
        font-weight: 700;
        border: 0;
        border-radius: 8px;
        background-color: #F04438;
        color: #FFFFFF;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 52px;
        padding: 15px 24px;
        gap: 8px;
        cursor: pointer;
        &:hover{
            background-color: #C43127;
        }
        &[data-disabled=true]{
            pointer-events: none;
            background-color: #F79E97;
        }
    `
}

const fonts = {
    title34b: `
        font-family: 'SF Pro';
        font-size: 34px;
        line-height: 41px;
        letter-spacing: -0.004em;
        font-weight: 700;
    `,
    title34r: `
        font-family: 'SF Pro';
        font-size: 34px;
        line-height: 41px;
        letter-spacing: -0.004em;
        font-weight: 400;
    `,
    title28b: `
        font-family: 'SF Pro';
        font-size: 28px;
        line-height: 34px;
        letter-spacing: -0.004em;
        font-weight: 700;
    `,
    title28r: `
        font-family: 'SF Pro';
        font-size: 28px;
        line-height: 34px;
        letter-spacing: -0.004em;
        font-weight: 400;
    `,
    headline22b: `
        font-family: 'SF Pro';
        font-size: 22px;
        line-height: 28px;
        letter-spacing: -0.004em;
        font-weight: 700;
    `,
    headline22r: `
        font-family: 'SF Pro';
        font-size: 22px;
        line-height: 28px;
        letter-spacing: -0.004em;
        font-weight: 400;
    `,
    headline20b: `
        font-family: 'SF Pro';
        font-size: 20px;
        line-height: 25px;
        letter-spacing: -0.004em;
        font-weight: 590;
    `,
    headline20r: `
        font-family: 'SF Pro';
        font-size: 20px;
        line-height: 25px;
        letter-spacing: -0.004em;
        font-weight: 400;
    `,
    body17b: `
        font-family: 'SF Pro';
        font-size: 17px;
        line-height: 22px;
        letter-spacing: -0.004em;
        font-weight: 700;
    `,
    body17m: `
        font-family: 'SF Pro';
        font-size: 17px;
        line-height: 22px;
        letter-spacing: -0.004em;
        font-weight: 590;
    `,
    body17r: `
        font-family: 'SF Pro';
        font-size: 17px;
        line-height: 22px;
        letter-spacing: -0.004em;
        font-weight: 400;
    `,
    body14b: `
        font-family: 'SF Pro';
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.004em;
        font-weight: 700;
    `,
    body14m: `
        font-family: 'SF Pro';
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.004em;
        font-weight: 590;
    `,
    body14r: `
        font-family: 'SF Pro';
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.004em;
        font-weight: 400;
    `,
    callout16b: `
        font-family: 'SF Pro';
        font-size: 16px;
        line-height: 21px;
        letter-spacing: -0.004em;
        font-weight: 590;
    `,
    callout16r: `
        font-family: 'SF Pro';
        font-size: 16px;
        line-height: 21px;
        letter-spacing: -0.004em;
        font-weight: 400;
    `,
    label13b: `
        font-family: 'SF Pro';
        font-size: 13px;
        line-height: 18px;
        letter-spacing: -0.004em;
        font-weight: 590;
    `,
    label13r: `
        font-family: 'SF Pro';
        font-size: 13px;
        line-height: 18px;
        letter-spacing: -0.004em;
        font-weight: 400;
    `,
    label11b: `
        font-family: 'SF Pro';
        font-size: 11px;
        line-height: 13px;
        letter-spacing: -0.004em;
        font-weight: 590;
    `,
    label11r: `
        font-family: 'SF Pro';
        font-size: 11px;
        line-height: 13px;
        letter-spacing: -0.004em;
        font-weight: 400;
    `,
};

const colors = {
    neutral: {
        n100: '#000000',
        n80: '#2A2A2A',
        n77: '#383838',
        n70: '#555555',
        n60: '#777777',
        n50: '#949494',
        n40: '#B7B7B7',
        n30: '#DFDFDF',
        n20: '#EFEFEF',
        n15: '#F5F5F5',
        n0: '#FFFFFF',
    },
    primary: {
        main: '#5E4EF4',
        sub: '#B6AEF9',
        surface: '#F2F0FE',
        hover: '#3B2BCA',
    },
    danger: {
        main: '#F04438',
        sub: '#F79E97',
        surface: '#FFF1F0',
        hover: '#C43127',
    },
    warning: {
        main: '#FDCF44',
        sub: '#FEDB72',
        surface: '#FFF9E6',
        hover: '#D9A402',
    },
    success: {
        main: '#0FB366',
        sub: '#6AD7A4',
        surface: '#E7F9F0',
        hover: '#0A7643',
    },
    information: {
        main: '#119BFF',
        sub: '#75C5FF',
        surface: '#D6EEFF',
        hover: '#0062A8',
    }
};

const devices = {
    mobile: "(min-width: 360px) and (max-width:599px)",
    desktop: "(min-width: 600px) and (max-width: 1420px)"
};

const theme = {
    fonts, colors, devices, mediumBtns, largeBtns, iconBtns, plusBtns, height
};

export default theme;