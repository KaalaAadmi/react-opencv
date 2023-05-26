import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.cpr',
  appName: 'cpr',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
