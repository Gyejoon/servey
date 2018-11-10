from django.db import models


class AdminAduitModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Admin(AdminAduitModel):
    name = models.CharField(max_length=50)
    admin_id = models.CharField(max_length=30)
    password = models.CharField(max_length=256)
    salt = models.CharField(max_length=128)

    def gen_salt(self):
        self.salt = 'abcqwe'

    def gen_hash(self, password):
        self.password = password

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
    YES_OR_NO = 'YN'
    SINGLE = 'SI'
    MULTIPLE = 'MU'
    TYPE_CHOICES = (
        (YES_OR_NO, 'YesorNo'),
        (SINGLE, 'Single'),
        (MULTIPLE, 'Mutiple')
    )
    type = models.CharField(max_length=2,
                            choices=TYPE_CHOICES,
                            default=YES_OR_NO)
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