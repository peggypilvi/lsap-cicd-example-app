pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS-24-LTS'  // 使用你剛剛設定的 NodeJS 名稱
    }
    
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        
        stage('Tool Install') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build & Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
