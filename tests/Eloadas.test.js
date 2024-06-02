import { describe, it, expect } from 'vitest';
import Eloadas from '../EloadasProject.js';

describe('Eloadas', () => {
    it('should initialize correctly with valid parameters', () => {
        const eloadas = new Eloadas(3, 3);
        expect(eloadas.foglalasok.length).toBe(3);
        expect(eloadas.foglalasok[0].length).toBe(3);
    });

    it('should throw error with invalid parameters', () => {
        expect(() => new Eloadas(0, 3)).toThrow('A sorok és helyek száma 0-nál nagyobb kell legyen.');
        expect(() => new Eloadas(3, 0)).toThrow('A sorok és helyek száma 0-nál nagyobb kell legyen.');
    });

    it('should correctly book the first available seat', () => {
        const eloadas = new Eloadas(3, 3);
        expect(eloadas.lefoglal()).toBe(true);
        expect(eloadas.foglalasok[0][0]).toBe(true);
    });

    it('should return the correct number of free seats', () => {
        const eloadas = new Eloadas(3, 3);
        expect(eloadas.getSzabadHelyek()).toBe(9);
        eloadas.lefoglal();
        expect(eloadas.getSzabadHelyek()).toBe(8);
    });

    it('should return true if all seats are booked', () => {
        const eloadas = new Eloadas(1, 1);
        expect(eloadas.getTeli()).toBe(false);
        eloadas.lefoglal();
        expect(eloadas.getTeli()).toBe(true);
    });

    it('should return if a specific seat is booked', () => {
        const eloadas = new Eloadas(3, 3);
        expect(eloadas.Foglalt(1, 1)).toBe(false);
        eloadas.lefoglal();
        expect(eloadas.Foglalt(1, 1)).toBe(true);
    });

    it('should throw error for invalid seat parameters', () => {
        const eloadas = new Eloadas(3, 3);
        expect(() => eloadas.Foglalt(0, 1)).toThrow('Érvénytelen paraméter.');
        expect(() => eloadas.Foglalt(1, 0)).toThrow('Érvénytelen paraméter.');
        expect(() => eloadas.Foglalt(4, 1)).toThrow('Érvénytelen paraméter.');
        expect(() => eloadas.Foglalt(1, 4)).toThrow('Érvénytelen paraméter.');
    });
});
