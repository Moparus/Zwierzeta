export interface Zwierze
{
  nazwa: string;
  opis: string;
  zdjecie: string;
  gatunek: Gatunek;
  rodzaj: Rodzaj;
  zagrozenie: boolean;
}

export enum Gatunek
{
  ryby = 1,
  gady,
  plazy,
  ssaki
}

export enum Rodzaj
{
  ladowe = 1,
  wodne,
  latajace
}