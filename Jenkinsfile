pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS-24-LTS'
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
        
        stage('Deploy and Verify') {
            steps {
                script {
                    // 停止並移除舊的容器（如果存在）
                    sh '''
                        docker stop staging-app || true
                        docker rm staging-app || true
                    '''
                    
                    // 建立新的 Docker image
                    sh 'docker build -t staging-app:2 .'
                    
                    // 執行新容器在 port 8081
                    sh 'docker run -d --name staging-app -p 8081:3000 staging-app:2'
                    
                    // 等待服務啟動
                    sh 'sleep 5'
                    
                    // 健康檢查
                    sh 'curl -f http://localhost:8081/health || exit 1'
                    
                    echo 'Deployment successful!'
                }
            }
        }
    }
}
