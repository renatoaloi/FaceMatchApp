# FaceMatchApp

## Face recognition and identification mobile application

### How to use this application

- Run the following commands in your terminal:

```bash
$ yarn
```

- To run android:

```bash
$ yarn android
```

- To run iOS:

```bash
$ yarn ios
```

### How deploy the application

- First build de bundle:

```bash
$ yarn bundle
```

- Then deploy the application:

```bash
$ cd android
$ gradlew installRelease
```
