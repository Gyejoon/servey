from django.db import models
import bcrypt


class AdminAduitModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        abstract = True


class Admin(AdminAduitModel):
    name = models.CharField(max_length=50)
    admin_id = models.CharField(max_length=30)
    password = models.CharField(max_length=256)

    def __str__(self):
        return self.name + self.admin_id

    def hashpw(self, password): 
        self.password = bcrypt.hashpw(password.encode('ascii'), bcrypt.gensalt())

    def checkpw(self, password):
        return bcrypt.checkpw(password.encode('ascii'), self.password)



""" 설문조사 """
class Servey(AdminAduitModel):
    name = models.CharField(max_length=50)


""" 설문조사 참여자 정보 """
class ServeyPublication(models.Model):
    # 설문조사 FK
    servey = models.ForeignKey(Servey, on_delete=models.CASCADE)
    # 설문조사 참여자 이메일
    email = models.CharField(max_length=100)
    # 참여 날짜
    created = models.DateTimeField(auto_now_add=True)


""" 설문조사 질문 """
class ServeyQuestion(AdminAduitModel):
    # 설문조사 FK
    servey = models.ForeignKey(Servey, on_delete=models.CASCADE)
    # 설문조사 질문명
    name = models.CharField(max_length=100)
    # 설문조사 답변 타입
    TYPE_CHOICES = (
        ('YN', 'YesorNo'),
        ('SI', 'Single'),
        ('MU', 'Mutiple')
    )
    type = models.CharField(max_length=2,
                            choices=TYPE_CHOICES)
    # 설문조사 질문 순서
    order = models.IntegerField()

    def set_order(self):
        self.order = self.order + 1


""" 설문조사 질문의 답변 항목 """
class ServeyQuestionAnswerItem(models.Model):
    # 설문조사 질문 FK
    servey_question = models.ForeignKey(
        ServeyQuestion, on_delete=models.CASCADE)
    # 설문조사 답변 항목명
    name = models.CharField(max_length=100)
    # 답변 정보
    answer = models.ManyToManyField(ServeyPublication)
