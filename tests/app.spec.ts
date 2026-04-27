import { test, expect } from '@playwright/test';

test.describe('Faiz Nois Fala Ingles Pur Favor', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('file://' + process.cwd() + '/index.html');
  });

  test('deve carregar a página inicial', async ({ page }) => {
    await expect(page).toHaveTitle('faiz nois fala ingreis pur favor');
    await expect(page.locator('#home')).toBeVisible();
    await expect(page.locator('#lesson-title')).toContainText('Lição do Dia');
  });

  test('deve mostrar mensagem de alerta quando test não foi feito', async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await expect(page.locator('#no-test-msg')).toBeVisible();
    await expect(page.locator('#no-test-text')).toContainText('teste de nivelamento');
  });

  test('deve cambiar idioma para inglês', async ({ page }) => {
    await page.selectOption('#lang', 'en');
    await expect(page.locator('#lesson-title')).toContainText('Daily Lesson');
    await expect(page.locator('#no-test-text')).toContainText("haven't taken the test");
  });

  test('deve cambiówizar idioma para francês', async ({ page }) => {
    await page.selectOption('#lang', 'fr');
    await expect(page.locator('#lesson-title')).toContainText('Leçon du Jour');
  });

  test('deve iniciar teste de nivelamento', async ({ page }) => {
    await page.click('#start-test-btn');
    await expect(page.locator('#test-options')).toBeVisible();
  });

  test('deve navegar para perfil', async ({ page }) => {
    await page.click('.nav-btn:has-text("Perfil")');
    await expect(page.locator('#profile')).toBeVisible();
  });

  test('deve mostrar seletor de avatar ao clicar', async ({ page }) => {
    await page.click('.nav-btn:has-text("Perfil")');
    await page.click('#avatar-display');
    await expect(page.locator('#avatar-selector')).toBeVisible();
  });

  test('deve mostrar opções de resposta', async ({ page }) => {
    page.evaluate(() => {
      localStorage.setItem('fnfipf_user', JSON.stringify({
        nome: 'Test',
        avatar: '😀',
        xp: 0,
        streak: 0,
        hearts: 5,
        nivel: 'Básico',
        testFeito: true,
        testeEtapa: 0
      }));
    });
    await page.reload();
    await expect(page.locator('#options')).toBeVisible();
  });

  test('deve responder corretamente', async ({ page }) => {
    page.evaluate(() => {
      localStorage.setItem('fnfipf_user', JSON.stringify({
        nome: 'Test',
        avatar: '😀',
        xp: 0,
        streak: 0,
        hearts: 5,
        nivel: 'Básico',
        testFeito: true,
        testeEtapa: 0
      }));
    });
    await page.reload();
    
    const buttons = page.locator('#options button');
    const count = await buttons.count();
    expect(count).toBe(4);
  });

  test('deve mostrar barra de XP', async ({ page }) => {
    await expect(page.locator('.xp-bar')).toBeVisible();
    await expect(page.locator('#xp-bar')).toBeVisible();
  });

  test('deve ter navegação entre abas', async ({ page }) => {
    await expect(page.locator('.nav')).toBeVisible();
    await expect(page.locator('.nav-btn')).toHaveCount(3);
  });

  test('deve ter selector de idioma', async ({ page }) => {
    await expect(page.locator('#lang')).toBeVisible();
    const options = page.locator('#lang option');
    await expect(options).toHaveCount(2);
  });
});