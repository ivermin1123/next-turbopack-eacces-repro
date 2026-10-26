# Turbopack build aborts on an unreadable directory reached by a dynamic path.join

```sh
pnpm install
mkdir -p private/sealed && chmod 000 private/sealed

pnpm build            # Turbopack: fails, TurbopackInternalError, Permission denied (os error 13)
pnpm build:webpack    # webpack: passes

chmod 755 private/sealed
pnpm build            # Turbopack: passes
```

The unreadable directory can be anywhere under the project root. The only code
involved is `path.join(dir, "out")` in `app/api/files/route.js`.
