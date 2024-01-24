from playwright.sync_api import Page


def test_github(page: Page):
    page.goto("https://github.com/1021ky")
    assert page.query_selector('text="keisuke yamanaka"') is not None
