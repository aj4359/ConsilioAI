"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRegulatoryStore = void 0;
var zustand_1 = require("zustand");
exports.useRegulatoryStore = (0, zustand_1.create)(function () { return ({
    jurisdiction: null,
    disclosures: {
        US: {
            registrationNumber: 'SEC-801-123456',
            regulatoryBody: 'SEC',
            disclosureText: "IMPORTANT: Consilio-AI is registered with the Securities and Exchange Commission (SEC) as an investment adviser. This registration does not imply a certain level of skill or training. All investment strategies have the potential for profit or loss."
        },
        UK: {
            frnNumber: '123456',
            regulatoryBody: 'FCA',
            disclosureText: "IMPORTANT: Consilio-AI is authorised and regulated by the Financial Conduct Authority (FRN: 123456). The value of investments can go down as well as up, and you may get back less than you invest."
        }
    }
}); });
