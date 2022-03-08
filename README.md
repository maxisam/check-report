[![🌞 CI](https://github.com/maxisam/check-report/actions/workflows/CI.yml/badge.svg)](https://github.com/maxisam/check-report/actions/workflows/CI.yml)

# Check Report Action

Create a check report for your workflow. Basically it utilizes [check-run](https://docs.github.com/en/rest/reference/checks#create-a-check-run), so you can input markdown esaily.

## Example

https://github.com/maxisam/check-report/runs/5468373477?check_suite_focus=true

https://user-images.githubusercontent.com/456807/157306240-dc0b18fa-8abc-4dcd-8bd0-b5f0398c0f6d.png

```yml
- uses: maxisam/check-report@v1
  with:
    authToken: ${{ secrets.GITHUB_TOKEN }}
    checkName: 'CI Check Report'
    conclusion: ${{ needs.build.result }}
    summary: 'Check Summary'
    content: |
      ## Check Report Example
      - ☀️ everything works
    detailsUrl: 'https://github.com/maxisam/check-report'
```
