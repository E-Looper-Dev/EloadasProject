import { describe, it, expect } from 'vitest';
import Eloadas from '../EloadasProject.js';

describe('Eloadas', () => {
    it('Helyesen kell inicializálódnia érvényes paraméterekkel', () => {
        const eloadas = new Eloadas(3, 3);
        expect(eloadas.foglalasok.length).toBe(3);
        expect(eloadas.foglalasok[0].length).toBe(3);
    });

    it('Hibát dob érvénytelen paraméterekkel', () => {
        expect(() => new Eloadas(0, 3)).toThrow('A sorok és helyek száma 0-nál nagyobb kell legyen.');
        expect(() => new Eloadas(3, 0)).toThrow('A sorok és helyek száma 0-nál nagyobb kell legyen.');
    });

    it('Helyesen kell lefoglalnia az első szabad ülőhelyet', () => {
        const eloadas = new Eloadas(3, 3);
        expect(eloadas.lefoglal()).toBe(true);
        expect(eloadas.foglalasok[0][0]).toBe(true);
    });

    it('Vissza kell adnia a megfelelő számú szabad helyet', () => {
        const eloadas = new Eloadas(3, 3);
        expect(eloadas.getSzabadHelyek()).toBe(9);
        eloadas.lefoglal();
        expect(eloadas.getSzabadHelyek()).toBe(8);
    });

    it('Helyes értéket kell megadnia, ha minden ülőhelyet lefoglalt', () => {
        const eloadas = new Eloadas(1, 1);
        expect(eloadas.getTeli()).toBe(false);
        eloadas.lefoglal();
        expect(eloadas.getTeli()).toBe(true);
    });

    it('Vissza kell térnie, ha egy adott ülőhelyet foglaltak', () => {
        const eloadas = new Eloadas(3, 3);
        expect(eloadas.Foglalt(1, 1)).toBe(false);
        eloadas.lefoglal();
        expect(eloadas.Foglalt(1, 1)).toBe(true);
    });

    it('Hibát jelez érvénytelen ülésparaméterek esetén', () => {
        const eloadas = new Eloadas(3, 3);
        expect(() => eloadas.Foglalt(0, 1)).toThrow('Érvénytelen paraméter.');
        expect(() => eloadas.Foglalt(1, 0)).toThrow('Érvénytelen paraméter.');
        expect(() => eloadas.Foglalt(4, 1)).toThrow('Érvénytelen paraméter.');
        expect(() => eloadas.Foglalt(1, 4)).toThrow('Érvénytelen paraméter.');
    });
});
